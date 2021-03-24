import React from 'react'
import ReactDOM from 'react-dom'
import { getPage } from 'vite-plugin-ssr/client'
import { Router } from 'wouter'

async function hydrate() {
  const { Page, pageProps } = await getPage()

  ReactDOM.hydrate(
    <Router>
      <Page {...pageProps} />
    </Router>,
    document.getElementById('app'),
  )
}

hydrate()
