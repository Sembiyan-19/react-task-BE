const { Service } = require('feathers-mongoose');

exports.Categories = class Categories extends Service {
  
    async find() {
        return await super.find({query: {$populate: ['tasks']}})
    }

    async get(id) {
        return await super.get(id, {query: {$populate: ['tasks']}})
    }

    async patch(id, data) {
        return await super.patch(id, {$push: {tasks: data}})
    }
};
