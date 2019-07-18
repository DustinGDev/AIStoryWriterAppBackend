const userInteractions = require('./routes/userInteractionsRoutes.js');

module.exports = (app, eventManager) => {
  userInteractions(app, eventManager);
}
