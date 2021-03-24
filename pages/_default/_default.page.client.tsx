import React from 'react'
import ReactDOM from 'react-dom'
import { useClientRouter } from 'vite-plugin-ssr/client/router'

const { hydrationPromise } = useClientRouter({
  render({ Page, pageProps, isHydration }) {
    const page = <Page {...pageProps} />
    const container = document.getElementById('app')

    if (isHydration) {
      ReactDOM.hydrate(page, container)
    } else {
      ReactDOM.render(page, container)
    }
  },
  onTransitionStart,
  onTransitionEnd,
})

hydrationPromise.then(() => {
  console.log('Hydration finished; page is now interactive.')
})

function onTransitionStart() {
  console.log('Page transition start')
  document.querySelector('body')!.classList.add('page-transition')
}
function onTransitionEnd() {
  console.log('Page transition end')
  document.querySelector('body')!.classList.remove('page-transition')
}
