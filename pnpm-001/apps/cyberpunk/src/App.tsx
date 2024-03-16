import useTest from 'shared/hooks/useTest';
import SubApp from 'sub-application';
import Button from 'sub-application/components/Button';
import { SharedEntity } from 'sub-application/types';
import log from 'sub-application/utils/log';

import './App.css';
import { useEffect } from 'react';

function App() {
  const result = useTest();

  useEffect(() => {
    const a: SharedEntity = {
      name: 'name',
      description: 'description'
    };
    log(JSON.stringify(a));
  }, []);

  return (
    <>
      <Button>Hello</Button>
      {result}
      <SubApp testProp="WOOOOOW, COOOL" />
    </>
  );
}

export default App;
