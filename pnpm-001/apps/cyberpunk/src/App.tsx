import useTest from 'shared/hooks/useTest'
import SubApp from 'sub-application'

import './App.css'

function App() {
  const result = useTest()

  return (
    <>
      {result}
      <SubApp testProp="WOOOOOW, COOOL" />
    </>
  )
}

export default App
