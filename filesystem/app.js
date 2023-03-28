
const File = require('./File');

const file = new File();

file.readContent('stores')
.then(result => console.log(result))
.catch(error => console.error(error));

file.readFile('stores/201/201.json')
.then(result => console.log(result))
.catch(error => console.error(error));

file.typeContent('stores')
.then(result => console.log(result))
.catch(error => console.error(error));

file.findContent('stores')
.then(result => console.log(result))
.catch(error => console.error(error));