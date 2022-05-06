
const { createCatalogue } = require('../service/catalogue.service.js');

module.exports = class catalogue {
    static async createCatalogue (req, res) {
        const {id} = req.params;

        const newCatalogue = await createCatalogue(req.body);
        res.status(200).location(`/api/v1/catalogue/${newCatalogue._id}`);
        res.json({status: 'Success'});
    }
}