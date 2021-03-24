// Forked from here: https://github.com/molefrog/wouter/blob/master/static-location.js
// as importing does not seem to be supported by Vite

interface StaticLocationHookOptions {
  record?: boolean
}

export function staticLocationHook(path = '/', { record = false }: StaticLocationHookOptions) {
  let hook: any

  const navigate = (to: string, { replace }: any = {}) => {
    if (record) {
      if (replace) {
        hook.history.pop()
      }
      hook.history.push(to)
    }
  }

  hook = () => [path, navigate]

  hook.history = [path]

  return hook
}
