const { TodoController } = require('../controllers');

class TodoRoutes {
  
  constructor(router) {
    this.expressRouter = router;
    this.controller = new TodoController();
    this.routes();
  }

  routes() {
    this.expressRouter.post('/', (req, res) => this.controller.create(req, res));
    this.expressRouter.put('/', (req, res) => this.controller.update(req, res));
    this.expressRouter.get('/', (req, res) => this.controller.getAll(req, res));
    this.expressRouter.get('/:_id', (req, res) => this.controller.getOne(req, res));
    this.expressRouter.delete('/:_id', (req, res) => this.controller.delete(req, res));
  }

  get router() {
    return this.expressRouter;
  }
};

module.exports = TodoRoutes;