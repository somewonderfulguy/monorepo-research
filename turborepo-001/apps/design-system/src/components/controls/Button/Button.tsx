import { HTMLProps } from 'react'

import styles from './Button.module.css'
// import Play from './play.svg?react'

export type Props = HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset'
  buttonStyle?: 'filled' | 'outlined'
  cutTopLeftCorner?: boolean
  cutTopRightCorner?: boolean
  cutBottomLeftCorner?: boolean
  cutBottomRightCorner?: boolean
}

const Button = ({
  type = 'button',
  cutTopLeftCorner,
  cutTopRightCorner,
  cutBottomLeftCorner,
  cutBottomRightCorner,
  className = '',
  ...props
}: Props) => {
  return (
    <>
      <div className={styles.buttonWrapper} data-augmented-ui="bl-clip">
        <button
          type={type}
          {...props}
          className={`${styles.button} ${className}`}
        />
      </div>
      {/* <Play /> */}
    </>
  )
}

export default Button
