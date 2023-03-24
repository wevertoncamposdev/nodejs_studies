const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

function findBy(prop, value, data) {
    const result = data.results.find(obj => obj[prop] == value);
    return result ? result : 'Not Found!';
}

app.get('/', (req, res) => {
    res.send('Server in runnig!');
});

app.get('/products', (req, res) => {

    const dataPath = path.join(__dirname, 'data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const keys = Object.keys(req.query);

    if (keys[0]) {
        res.json(findBy(keys[0], req.query[keys[0]], data));
    } else {
        res.json(data.results);
    }
});

app.listen(port, () => {
    console.log('Server in runnig');
});