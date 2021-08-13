const { TodoModel } = require('../models');

class TodoServices {
  
  async create(todo) {
    try {
      const model = new TodoModel(todo);
      return await model.save();
    } catch (error) {
      throw new Error(error);
    }
  };

  async update(query, update, options = {}) {
    try {
      return await TodoModel.findOneAndUpdate(query, update, options);
    } catch (error) {
      throw new Error(error);
    }
  };

  async delete(query) {
    try {
      return await TodoModel.findOneAndDelete(query);
    } catch (error) {
      throw new Error(error);
    }
  };

  async getAll() {
    try {
      const todos = await TodoModel.find({});
      return todos;
    } catch (error) {
      throw new Error(error);
    }
  };

  async getOne(query) {
    try {
      const todo = await TodoModel.findOne(query);
      return todo;
    } catch (error) {
      throw new Error(error);
    }
  };
};

module.exports = TodoServices;