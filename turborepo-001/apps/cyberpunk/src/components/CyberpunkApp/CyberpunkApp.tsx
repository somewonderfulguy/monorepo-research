import Player from '@repo/player';
import { BearStore } from '@repo/shared/types';

import Menu from '../Menu';

import styles from './CyberpunkApp.module.css';

import { createStore, useStore, create } from 'zustand';

const useBearStore = create<BearStore>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  clear: () => set({ bears: 0 })
}));

function CyberpunkApp() {
  const bears = useBearStore((s) => s.bears);
  const increase = useBearStore((s) => s.increase);

  return (
    <>
      <div>bears: {bears}</div>
      <div>
        <button type="button" onClick={() => increase(1)}>
          Add bear
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
