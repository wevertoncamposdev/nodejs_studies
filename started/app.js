const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

function findById(id, data) {
    return data.results.find(obj => obj.id === parseInt(id));
};

app.get('/', (req, res) => {
    res.send('Server in runnig!');
});

app.get('/products', (req, res) => {

    const data = JSON.parse(fs.readFileSync('./data.json'));

    if(req.query.id){
        res.json(findById(req.query.id, data));
    }else{
        res.json(data);
    }
});

app.listen(port, () => {
    console.log('Server in runnig');
});