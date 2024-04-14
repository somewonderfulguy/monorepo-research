import styles from './ControlBar.module.css'
import graffiti from './assets/graffiti.png'

const ControlBar = () => {
  return (
    <div className={styles.controlBarContainer}>
      <div className={styles.controlBar}>
        <div
          aria-hidden="true"
          className={styles.graffitiText}
          style={{ backgroundImage: `url('${graffiti}')` }}
        />

        <div style={{ color: '#fff' }}>Music</div>
        <div>
          <button>Play</button>
          <button>Pause</button>
          <button>Stop</button>
        </div>
        <div style={{ color: '#fff' }}>More controls</div>
      </div>
    </div>
  )
}

export default ControlBar
