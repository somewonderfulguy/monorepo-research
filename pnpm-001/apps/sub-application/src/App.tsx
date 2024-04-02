import useTest from 'shared/hooks/useTest'
import { ReactNode, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from './components/Button/assets/vite.svg'
import Button from './components/Button'
// import { ReactComponent as ReactLogo2 } from './assets/react.svg'
import Lab from './components/Lab'
import { Provider as LabProvider } from './components/Lab/contexts/fastStore'

import viteLogo from '/assets/vite-public.svg'

import './App.css'
import './index.css'
import './styles/fonts.css'
import styles from './App.module.css'

const AppWrapper = (props: { testProp?: string; subComponent?: ReactNode }) => {
  return (
    <LabProvider>
      <App {...props} />
    </LabProvider>
  )
}

function App({
  testProp,
  subComponent
}: {
  testProp?: string
  subComponent?: ReactNode
}) {
  const [count, setCount] = useState(0)
  const result = useTest()

  return (
    <>
      <div>
        <div>
          <Lab />
        </div>
        {subComponent}
        <Button>Superior Button</Button>
        {/* <ReactLogo2 /> */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={styles.title}>
        Vite + React +/- {result} + {testProp}
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default AppWrapper
