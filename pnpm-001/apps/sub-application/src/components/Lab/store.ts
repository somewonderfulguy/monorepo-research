function createStore<TState extends Record<string, unknown>>(
  initialState: TState
) {
  let currentState = initialState
  type Listener = (currentState: TState) => void
  const listeners = new Set<Listener>()
  return {
    getState: () => currentState,
    setState: (newState: Partial<TState>) => {
      currentState = { ...currentState, ...newState }
      listeners.forEach((listener) => listener(currentState))
    },
    subscribe: (listener: Listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    }
  }
}

const store = createStore({
  value1: 0,
  value2: 0
})

export { store }
