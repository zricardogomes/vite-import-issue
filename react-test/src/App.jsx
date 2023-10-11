import './App.css';

import { fn1, fn2 } from 'exosocket';

function App() {
  return (
    <>
      <div className="card">
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
      </div>
    </>
  );
}

export default App;
