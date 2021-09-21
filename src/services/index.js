const users = require('./users/users.service.js');
const categories = require('./categories/categories.service.js');
const tasks = require('./tasks/tasks.service.js');
const steps = require('./steps/steps.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(categories);
  app.configure(tasks);
  app.configure(steps);
};
