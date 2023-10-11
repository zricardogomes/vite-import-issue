//import MyWorker from './worker?worker';
//
//const worker = new MyWorker();

const worker = new Worker(new URL('./worker.js', import.meta.url), {
  type: 'module',
});

export function fn1() {
  console.log('HEY 1 VITE');
}

worker.onmessage = (event) => {
  console.log('Message received from worker 2 VITE');
  if (event && event.data && event.data.command) {
    const msg = event.data;

    switch (msg.command) {
      case 'FN2_REPLY':
        console.log('FN2 answer 2 VITE');
      default:
        break;
    }
  }
};

export function fn2() {
  console.log('FN2 function called 2 VITE.');
  var message = {
    command: 'FN2',
  };

  worker.postMessage(message);
}
