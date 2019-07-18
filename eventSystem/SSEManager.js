const SSE = require('express-sse');

class SSEManager {
  constructor(app) {
    this.sse = new SSE();

    app.get('/event-stream', this.sse.init)

    // A test interval
    setInterval(() => {
      this.sse.send({test: 'test'}, 'test');
    }, 3000)
  }
}

module.exports = SSEManager;
