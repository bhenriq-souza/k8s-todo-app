const { TodoServices } = require('../services');

class TodoController {

  constructor() {
    this.service = new TodoServices();
  }

  async create(req, res) {
    try {
      const { todo } = req.body;
      todo.created = (new Date()).toDateString();
      todo.updated = (new Date()).toDateString();
      const newTodo = await this.service.create(todo);
      res
        .status(200)
        .send({
          message: "success",
          _id: newTodo.id
        });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  async update(req, res) {
    try {
      const { _id, newStatus } = req.body;
      const update = {
        status: newStatus,
        updated: (new Date()).toDateString(),
      };

      const updatedTodo = await this.service
        .update({ _id }, update, { new: true });

      res
        .status(200)
        .send({
          message: "success",
          updatedTodo,
        });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  async getAll(req, res) {
    try {
      const todos = await this.service.getAll();

      res
        .status(200)
        .send({ todos });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  async getOne(req, res) {
    try {
      const { _id } = req.params;
      const todo = await this.service.getOne({ _id });

      res
        .status(200)
        .send({ todo });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  async delete(req, res) {
    try {
      const { _id } = req.params;
      
      await this.service.delete({ _id });

      res
        .status(500)
        .send({
          message: "success",
          _id,
        });
    } catch (error) {
      res.status(500).send(error);
    }
  };

};

module.exports = TodoController;