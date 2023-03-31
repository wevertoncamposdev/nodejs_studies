const fs = require('fs');
const path = require('path');
// observable; fatch;

class File {

    /**
     * Intanciar a classe passando o diretório a ser analisado
     * @param dir - Diretório 
     * @method readContent; @method typeContent; @method findContent
     * */
    constructor(dir, file) {
        this.dir = __dirname + '\\' + dir;
        this.file = file;
        this.list = new Array;
    }

    /**
      * Ler todo o conteúdo do diretório analisando;
      * @returns fs.promises.readdir(this.dir);
      */
    async readContent(dir) {
        return await fs.promises.readdir(__dirname + '\\' + dir);
    }

    /**
      * Ler o arquivo;
      * @returns fs.promises.readdir(this.dir);
      */
    async readFile(file) {
        return await fs.promises.readFile(__dirname + '\\' + file, 'utf-8');
    }

    /**
      * Percorre todo o conteúdo do diretório analisando o tipo de conteúdo Folder or File;
      * @returns list - lista de conteúdos encontrados
      */
    async typeContent(dir) {
        const list = new Array;
        const content = await fs.promises.readdir(__dirname + "\\" + dir, { withFileTypes: true });
        for (let item of content) {
            const type = item.isDirectory() ? "folder" : "file";
            list.push(`${item.name}: ${type}`);
        }
        return list;
    }


    /**
      * Percorre todo o conteúdo do diretório de forma recursiva
      * listando todo o conteúdo até de todos os diretórios, pastas e subpstas.
      * @param dir - diretório 
      * @returns list - lista de conteúdos encontrados
      */
    async findContent(dir) {
        
        const content = await fs.promises.readdir(__dirname + '\\' + dir, { withFileTypes: true });

        for (const item of content) {
            const itemPath = path.join(dir, item.name);
            if (item.isDirectory()) {

                // item é um diretório, então chamamos findContent recursivamente
                this.list.push(`${dir}\\${item.name}`);
                await this.findContent(itemPath);

            } else {
                this.list.push(`${dir}\\${item.name}`);
            }
        }

        return this.list;
    }
}



module.exports = File;