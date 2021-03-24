import { Request } from 'express'

export type ReactComponent = (pageProps: PageProps) => JSX.Element

export type PageProps = {
  data: string
}

export type ContextProps = {
  path: string
  query: Request['query']
}
