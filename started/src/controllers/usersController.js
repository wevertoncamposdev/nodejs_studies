class UserController {

    async index(req, res) {
        res.json('User Index');
    }
    async show(req, res) {
        const query = req.query;
        query.id = req.params.id
        res.json(query);
    }
    async create(req, res) {
        const userId = req.params.id;
        res.json(`User Create`);
    }
    async update(req, res) {
        const userId = req.params.id;
        res.json(`User Update`);
    }
    async delete(req, res) {
        const userId = req.params.id;
        res.json(`User Delete`);
    }
}

module.exports = new UserController();