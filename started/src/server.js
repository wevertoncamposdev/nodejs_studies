const express = require('express');
const router = require('./routes/routes')(express);
const sequelize = require('./database/database');
const app = express();
const port = 3000;

//definir rotas
app.use(router);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Server in runnig');
    });
});