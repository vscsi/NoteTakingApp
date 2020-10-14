const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(require.main.filename), 'data', 'notes.json');

const getNotesFromFile = (cb) => {
    fs.readFile(p, (err, data) => {
        if (err) {
            return cb([]);
        } else {
            cb(JSON.parse(data))
        }
    })

}

module.exports = class Notes {
    constructor(n) {
        this.notes = n;
    }

    save() {
        getNotesFromFile(notes => {
            notes.push(this);
            fs.writeFile(p, JSON.stringify(notes), (err) => {
                console.log(err)
            })
        });

    }

    static fetchAll(cb) {
        getNotesFromFile(cb)
    }

}