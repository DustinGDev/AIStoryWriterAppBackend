class UserInteractionsController {
  constructor(eventManager) {
    this.eventManager = eventManager;

    this.login =  this.login.bind(this);
  }

  login(req, res) {
    res.send('not yet implemented')
  }
}

module.exports = UserInteractionsController;
