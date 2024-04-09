import createContextStore from 'shared/utils/createContextStore'

const {
  Provider: IndicatorPositionProvider,
  useStoreValue: useIndicatorPositionValue,
  useStoreDispatch: useIndicatorPositionDispatch
} = createContextStore(
  { left: 0, width: 0, isGoingLeft: false },
  'IndicatorPositionProvider'
)

export {
  IndicatorPositionProvider,
  useIndicatorPositionValue,
  useIndicatorPositionDispatch
}
