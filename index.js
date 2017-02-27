'use strict';

class JSONy {
    constructor() {
    }

    compile(file) {
        return new Promise((resolve, reject) => {
            try {
                JSON.parse(file.data);
            } catch (error) {
                reject(error);
            }

            file.data = `module.exports = ${file.data};`;
            resolve(file);
        });
    }
}

JSONy.prototype.brunchPlugin = true;
JSONy.prototype.type = 'javascript';
JSONy.prototype.extension = 'json';

module.exports = JSONy;
