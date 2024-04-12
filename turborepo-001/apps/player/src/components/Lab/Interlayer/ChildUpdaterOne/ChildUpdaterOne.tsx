import { useStoreDispatch } from '../../contexts/fastStore'

import styles from './ChildUpdaterOne.module.css'

const ChildUpdaterOne = () => {
  const setStore = useStoreDispatch()
  return (
    <div className={styles.block}>
      <button onClick={() => setStore({ valueOne: 'Vincent' })}>Vi</button>
    </div>
  )
}

export default ChildUpdaterOne
