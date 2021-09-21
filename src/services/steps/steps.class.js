const { Service } = require('feathers-mongoose');

exports.Steps = class Steps extends Service {
  
    // setup(app) {
    //     this.app = app;
    // }

    // async create(data) {
    //     let createdStep = await super.create(data);
    //     this.app.service('tasks').patch(data.id, createdStep._id)
    //     return createdStep;
    // }
};
