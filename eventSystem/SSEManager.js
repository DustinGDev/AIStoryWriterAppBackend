const SSE = require('express-sse');

class SSEManager {
  constructor(app) {
    this.sse = new SSE();

    app.get('/event-stream', this.sse.init)

    // A test interval
    //  TODO: Has to be removed when not needed anymore
    setInterval(() => {
      this.sse.send({test: 'test'}, 'test');
    }, 3000)

    this.sendEvent = this.sendEvent.bind(this);
  }

  sendEvent(eventName, content) {
    this.sse.send(content, eventName);
  }
}

module.exports = SSEManager;
