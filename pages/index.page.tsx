import * as React from 'react'
import { PageProps } from '../types'
import './App.css'

function Counter() {
  const [count, setCount] = React.useState(0)

  return <button onClick={() => setCount((count) => count + 1)}>Counter {count}</button>
}

export function Page({ data, path }: PageProps) {
  return (
    <div className="app">
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/page-1">Page 1</a>
        <a href="/page-2">Page 2</a>
      </nav>
      <h1>{path}</h1>
      <p>This page is:</p>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <p>This should change on navigation:</p>
      <p>{data}</p>
    </div>
  )
}
