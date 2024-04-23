import Player from '@repo/player';
import { BearStore } from '@repo/shared/types';

import Menu from '../Menu';

import styles from './CyberpunkApp.module.css';

import { create } from 'zustand';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import useThemeStore from '@mf/state/themeStore';

const useBearStore = create<BearStore>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  clear: () => set({ bears: 0 })
}));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.useBearStoreCyberpunk = useThemeStore;

function CyberpunkApp() {
  const bears = useBearStore((s) => s.bears);
  const increase = useBearStore((s) => s.increase);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theBears = useThemeStore((s: any) => s.bears);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const increaseTheBears = useThemeStore((s: any) => s.increasePopulation);

  return (
    <>
      <div>bears: {bears}</div>
      <div>the bears: {theBears}</div>
      <div>
        <button type="button" onClick={() => increase(1)}>
          Add bear
        </button>
      </div>
      <div>
        <button type="button" onClick={() => increaseTheBears(1)}>
          Add the bear
        </button>
      </div>
      <header className={styles.header}>
        <div className={styles.menuContainer}>
          <Menu />
        </div>
      </header>
      <Player className={styles.player} useBearStore={useBearStore} />
    </>
  );
}

export default CyberpunkApp;
