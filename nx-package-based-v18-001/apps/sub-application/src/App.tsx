import useTest from 'shared/hooks/useTest'

function App() {
  const result = useTest()
  return (
    <>
      <div>FUCK BOSTON ({result})!</div>
    </>
  )
}

export default App
