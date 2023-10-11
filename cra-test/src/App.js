import './App.css';

import { fn1, fn2 } from 'exosocket';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            fn1();
          }}
        >
          RUN FN1
        </button>
        <button
          onClick={() => {
            fn2();
          }}
        >
          RUN FN2
        </button>
      </header>
    </div>
  );
}

export default App;
