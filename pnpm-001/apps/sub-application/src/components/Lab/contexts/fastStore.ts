import generateContext from '../generateContext'

const { Provider, useStoreValue, useStoreDispatch } = generateContext({
  valueOne: 'Johnny Silverhand',
  valueTwo: 'Keanu Reeves'
})

export { Provider, useStoreValue, useStoreDispatch }
