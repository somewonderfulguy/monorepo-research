import createContextStore from '../createContextStore'

const { Provider, useStoreValue, useStoreDispatch } = createContextStore({
  valueOne: 'Johnny Silverhand',
  valueTwo: 'Keanu Reeves'
})

export { Provider, useStoreValue, useStoreDispatch }
