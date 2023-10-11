import CryptoJS from 'crypto-js';

/*** onMessage() : Function that receives messages from mainThread.. ***/
onmessage = (e) => {
  console.log('WORKER RECEIVED MESSAGE 2 VITE');
  if (e.data && e.data.command) {
    const msg = e.data;
    switch (msg.command) {
      case 'FN2':
        console.log('Worker received FN2 message 2 VITE');
        runFn2();
      default:
        break;
    }
  }
};

function runFn2() {
  // INIT
  var myString = 'this is a string';
  var myPassword = 'myPassword';

  // PROCESS
  var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
  var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
  if (decrypted == 'this is a string') {
    console.log('IT WAS HERE 1 VITE');
  } else {
    console.log('IT WAS HERE 2 VITE');
  }

  const message = {
    command: 'FN2_REPLY',
  };

  postMessage(message);
}
