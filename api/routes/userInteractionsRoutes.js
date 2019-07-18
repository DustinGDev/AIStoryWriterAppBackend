const UserInteractionsController = require('./../controllers/UserInteractionsController.js');

module.exports = (app, eventManager) => {
  const controller = new UserInteractionsController(eventManager);

  app.route('/login')
    .get(controller.login);
}
