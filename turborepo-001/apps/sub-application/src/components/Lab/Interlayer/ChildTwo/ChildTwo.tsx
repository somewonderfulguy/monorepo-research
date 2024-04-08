import { useStoreValue, useStoreDispatch } from '../../contexts/fastStore'

import styles from './ChildTwo.module.css'

const ChildTwo = () => {
  const valueTwo = useStoreValue((store) => store.valueTwo)
  const setStoreValue = useStoreDispatch()
  return (
    <div className={styles.block}>
      <input
        value={valueTwo}
        onChange={(e) => setStoreValue({ valueTwo: e.target.value })}
      />
    </div>
  )
}

export default ChildTwo
