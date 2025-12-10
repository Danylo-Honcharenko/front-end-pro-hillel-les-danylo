class TodoService {
    #todoModel;

    constructor(todoModel) {
        this.#todoModel = todoModel;
    }

    createTodo = async (req, res) => {
        const {_id, done} = await this.#todoModel.create(req.body);
        res.status(200).send({id: _id, ...req.body, done: done});
    }

    getTodoById = async (req, res) => {
        const todo = await this.#todoModel.findOne({_id: req.query.id});
        if (todo !== null) {
            const {_id, text, done} = todo;
            res.status(200).send({id: _id, text: text, done: done});
            return;
        }
        res.status(404).send({error: 'Not Found'});
    }

    getAllTodos = async (req, res) => {
        const todos = await this.#todoModel.find();
        res.status(200).send(todos.map(({_id, text, done}) => Object.assign({}, {id: _id, text: text, done: done})));
    }

    updateTodo = async (req, res) => {
        const {id, ...todo} = req.body;
        await this.#todoModel.updateOne({_id: id}, todo);
        res.status(200).send({status: 'OK'});
    }

    deleteTodo = async (req, res) => {
        await this.#todoModel.deleteOne({_id: req.query.id})
        res.status(200).send({status: 'OK'});
    }
}

module.exports = TodoService;