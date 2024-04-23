import { HTMLAttributes } from 'react'

import { BearStore } from '@repo/shared/types'

import ControlBar from '../ControlBar'
import Sidebar from '../Sidebar'

import styles from './PlayerApp.module.css'
import { StoreApi, UseBoundStore } from 'zustand'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import useThemeStore from '@mf/state/themeStore'

type Props = HTMLAttributes<HTMLDivElement> & {
  useBearStore: UseBoundStore<StoreApi<BearStore>>
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.useBearStorePlayer = useThemeStore

const PlayerApp = ({ className, useBearStore, ...props }: Props) => {
  const clearBears = useBearStore((s) => s.clear)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clearTheBears = useThemeStore((s: any) => s.removeAllBears)

  return (
    <div className={`${styles.playerApp} ${className}`} {...props}>
      <button type="button" onClick={clearBears}>
        Clear bears
      </button>
      <button type="button" onClick={clearTheBears}>
        Clear the bears
      </button>
      <div className={styles.mainContainer}>
        <main className={styles.viewContainer}>
          <img
            style={{ scale: '1.5' }}
            src="https://lh3.googleusercontent.com/P407b89uopoffRRT0fdoJgX-12MEZYPB6Df7wpj05QF8HIrX5kXvr2TKzRBm27vjG1L23yDyzA4YXHEe=w544-h544-l90-rj"
          />
        </main>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
      </div>
      <div className={styles.controlBarContainer}>
        <ControlBar />
      </div>
    </div>
  )
}

export default PlayerApp
