require('dotenv').config();
const app = require('./app.js');

const init = (app) => {

    app.get('/', (req, res) => {
        res.send("<h1>It's Working</h1>");
    });
    

    app.listen(process.env.PORT, () => {
        console.log(`Server running @ ${process.env.PORT}`);
    })

}

init(app);