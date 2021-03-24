import * as React from 'react'
import { Link, useLocation } from 'wouter'
import { PageProps } from '../types'
import './App.css'

function Counter() {
  const [count, setCount] = React.useState(0)

  return <button onClick={() => setCount((count) => count + 1)}>Counter {count}</button>
}

export function Page({ data }: PageProps) {
  const [location] = useLocation()

  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/page-1">Page 1</Link>
        <Link to="/page-2">Page 2</Link>
      </nav>
      <h1>{location}</h1>
      <p>This page is:</p>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <p>
        <strong>@TODO:</strong> This should change on navigation:
      </p>
      <p>{data}</p>
    </div>
  )
}
