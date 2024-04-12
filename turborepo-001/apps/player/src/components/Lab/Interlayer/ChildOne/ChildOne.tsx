// import { useContext } from 'react'

// import { Count1Context, DispatchContext } from '../../contexts/labContext'
import { useStoreValue, useStoreDispatch } from '../../contexts/fastStore'

import styles from './ChildOne.module.css'

const ChildOne = () => {
  const valueOne = useStoreValue((store) => store.valueOne)
  const setStore = useStoreDispatch()

  return (
    <div className={styles.block}>
      <input
        value={valueOne}
        onChange={(e) => setStore({ valueOne: e.target.value })}
      />
    </div>
  )
}

export default ChildOne
