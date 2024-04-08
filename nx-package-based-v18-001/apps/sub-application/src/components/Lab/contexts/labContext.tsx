import { Dispatch, ReactNode, createContext, useReducer } from 'react'

type Action = { type: 'INC1' } | { type: 'INC2' }

const Count1Context = createContext<number>(0)
const Count2Context = createContext<number>(0)
const DispatchContext = createContext<Dispatch<Action>>(() => {})

const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    (prev: { count1: number; count2: number }, action: Action) => {
      if (action.type === 'INC1') {
        return { ...prev, count1: prev.count1 + 1 }
      }
      if (action.type === 'INC2') {
        return { ...prev, count2: prev.count2 + 1 }
      }
      throw new Error('no matching action')
    },
    { count1: 0, count2: 0 }
  )
  return (
    <DispatchContext.Provider value={dispatch}>
      {' '}
      <Count1Context.Provider value={state.count1}>
        {' '}
        <Count2Context.Provider value={state.count2}>
          {' '}
          {children}{' '}
        </Count2Context.Provider>{' '}
      </Count1Context.Provider>{' '}
    </DispatchContext.Provider>
  )
}

export { Count1Context, Count2Context, DispatchContext }
export default Provider
