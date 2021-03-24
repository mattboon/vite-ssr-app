import { Request } from 'express'

export type ReactComponent = (pageProps: PageProps) => JSX.Element

export interface PageProps {
  path: string
  query: Request['query']
  data: string
}

export interface ContextProps {
  path: string
  query: Request['query']
}
