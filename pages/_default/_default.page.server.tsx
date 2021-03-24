import 'isomorphic-fetch'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { html } from 'vite-plugin-ssr'
import { Router } from 'wouter'
import { staticLocationHook } from '../../server/staticLocationHook'
import { ContextProps, PageProps, ReactComponent } from '../../types'
import logoUrl from './logo.svg'

export async function addContextProps({ contextProps: { path, query } }: { contextProps: ContextProps }) {
  return {
    // later to be async data fetched from API, using `path` and `query`
    data: new Date().toISOString(),
  }
}

export function setPageProps({ contextProps: { data } }: { contextProps: { data: string } }) {
  return { data }
}

export function render({
  Page,
  pageProps,
  contextProps,
}: {
  Page: ReactComponent
  pageProps: PageProps
  contextProps: ContextProps
}) {
  const pageHtml = ReactDOMServer.renderToString(
    <Router hook={staticLocationHook(contextProps.path, { record: true })}>
      <Page {...pageProps} />
    </Router>,
  )

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
      </head>
      <body>
        <div id="app">${html.dangerouslySetHtml(pageHtml)}</div>
      </body>
    </html>`
}
