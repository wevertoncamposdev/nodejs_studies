const fs = require("fs");
const path = require('path');


/* Create diretory */
//fs.mkdir(path.join(__dirname, 'stores', '203', 'sales'), {recursive: true});


/* Write file */
async function lerArquivo() {
  const data = JSON.parse(await fs.promises.readFile(__dirname + "\\stores\\201\\sales.json"));
  data.total = 0;
  for (let prop in data) {
    data.total += data[prop];
  }
  await fs.promises.writeFile(path.join(__dirname + "\\stores\\201\\sales.json"), JSON.stringify(data));
  console.log(data);
}

lerArquivo();


/* Verify diretory */
/* try {
  fs.mkdir(path.join(__dirname, "stores", "201", "newDirectory"))
  .then(response => {
    if(!response){
      throw new Error('Não foi possível obter os dados');
    }
  })
  .catch( error => {
    throw new Error('Não foi possível obter os dados');
  });
} catch (error){
  console.log(`${path.join(__dirname, "stores", "201", "newDirectory")} already exists.`);
} */