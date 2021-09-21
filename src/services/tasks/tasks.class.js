const { Service } = require('feathers-mongoose');

exports.Tasks = class Tasks extends Service {
  
    setup(app) {
        this.app = app;
    }

    async create(data) {
        let createdTask = await super.create(data);
        return this.app.service('categories').patch(data.id, createdTask._id);
    }
};
