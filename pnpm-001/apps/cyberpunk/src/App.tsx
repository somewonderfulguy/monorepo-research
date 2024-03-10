import useTest from 'shared/hooks/useTest';
import SubApp from 'sub-application';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Button from 'sub-application/components/Button';

import './App.css';

function App() {
  const result = useTest();

  return (
    <>
      <Button>Hello</Button>
      {result}
      <SubApp testProp="WOOOOOW, COOOL" />
    </>
  );
}

export default App;
