import Player from '@repo/player';

import Menu from '../Menu';

import styles from './CyberpunkApp.module.css';

function CyberpunkApp() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.menuContainer}>
          <Menu />
        </div>
      </header>
      <Player className={styles.player} />
    </>
  );
}

export default CyberpunkApp;
