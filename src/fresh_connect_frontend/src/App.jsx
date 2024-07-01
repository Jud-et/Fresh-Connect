import React, { useEffect } from 'react';
import { initAuthClient } from './auth';
import { createActor } from './agent';

function App() {
  useEffect(() => {
    initAuthClient();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fresh Connect</h1>
      </header>
    </div>
  );
}

export default App;
