
const File = require('./File');
const file = new File();

main();

function main() {
    const content = readContent();
    console.log(content);
}

async function readContent() {
    const result = await file.readContent('stores')
        .then(resolve => { setTimeout(() => { const result = result }, '1000'); });
}