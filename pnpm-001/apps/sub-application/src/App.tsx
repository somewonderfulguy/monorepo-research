import useTest from 'shared/hooks/useTest'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useId,
  useState
} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite-public.svg'
// import viteLogo from './components/Button/assets/vite.svg'
import Button from './components/Button'
// import { ReactComponent as ReactLogo2 } from './assets/react.svg'

import './App.css'
import './index.css'
import './styles/fonts.css'
import styles from './App.module.css'

const StringContext = createContext<string | undefined>(undefined)
const StringDispatchContext = createContext<
  Dispatch<SetStateAction<string>> | undefined
>(undefined)

const useStringValue = () => {
  const context = useContext(StringContext)
  if (context === undefined) {
    throw new Error('useStringValue must be used within a StringProvider')
  }
  return context
}

const useStringDispatch = () => {
  const context = useContext(StringDispatchContext)

  if (context === undefined) {
    throw new Error(
      'useStringDispatch must be used within a StringDispatchContext'
    )
  }
  return context
}

const AnotherComponent = () => {
  const setString = useStringDispatch()
  console.log('render AnotherComponent')
  return (
    <div>
      Another Component{' '}
      <button onClick={() => setString('upd')}>setString</button>
    </div>
  )
}

const ComponentStringReader = () => {
  const string = useStringValue()
  console.log('render ComponentStringReader')
  return <div>ComponentStringReader {string}</div>
}

const AppWrapper = ({ testProp }: { testProp?: string }) => {
  const [string, setString] = useState<string>('test')

  return (
    <StringDispatchContext.Provider value={setString}>
      <StringContext.Provider value={string}>
        {/* as you pass subComponent as prop it won't be re-rendered on every state change of App component */}
        <App testProp={testProp} subComponent={<AnotherComponent />} />
      </StringContext.Provider>
    </StringDispatchContext.Provider>
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

  const id = useId()
  console.log('parent render', id)

  return (
    <>
      <div>
        <ComponentStringReader />
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
