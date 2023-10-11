(function() {
  "use strict";
  onmessage = (e) => {
    console.log("WORKER RECEIVED MESSAGE 2 VITE");
    if (e.data && e.data.command) {
      const msg = e.data;
      switch (msg.command) {
        case "FN2":
          console.log("Worker received FN2 message 2 VITE");
          runFn2();
      }
    }
  };
  function runFn2() {
    const message = {
      command: "FN2_REPLY"
    };
    postMessage(message);
  }
})();
