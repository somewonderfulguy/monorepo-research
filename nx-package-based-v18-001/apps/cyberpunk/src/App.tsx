import useTest from 'shared/hooks/useTest'
// TODO: resolve types
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SubApp from 'sub-application/dist/index.js'

import './App.css'

function App() {
  const result = useTest()

  return (
    <>
      {result} hey
      <SubApp />
    </>
  )
}

export default App
