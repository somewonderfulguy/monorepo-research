import { useStoreDispatch } from '../../contexts/fastStore'

import styles from './ChildUpdaterTwo.module.css'

const ChildUpdaterTwo = () => {
  const setStoreValue = useStoreDispatch()
  return (
    <div className={styles.block}>
      <button onClick={() => setStoreValue({ valueTwo: 'Malfunctioned' })}>
        Samurai
      </button>
    </div>
  )
}

export default ChildUpdaterTwo
