import { HTMLAttributes } from 'react'

import tsImg from './assets/ts.png'
import viteImg from './assets/vite.svg'
import styles from './Button.module.css'
import './Button.css'

const Button = ({ children, ...props }: HTMLAttributes<HTMLButtonElement>) => (
  <div>
    <button {...props} className={`${styles.button} my-vite-button`}>
      <img src={tsImg} alt="TypeScript" />
      <img src={viteImg} alt="Vite" />
      {children}
    </button>
  </div>
)

export default Button
