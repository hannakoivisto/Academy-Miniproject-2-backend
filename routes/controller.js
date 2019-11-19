const Pool = require('pg').Pool;
// yhdistämisparametrit toisessa moduulissa
const config = require('./config');
// valmiita luomaan allas
const pool = new Pool(config.connectionOptions);

function getAllQuestions(callback) {
    // haetaan yhteys altaasta
    pool.connect((err, client) => {
        if (err) throw err;
        // luodaan kysely
        client.query('select * from question', (err, data) => {
            if (err) throw err;
            client.release();
            callback(data.rows);
        });
    });
}

function getAllComments(callback) {
    // haetaan yhteys altaasta
    pool.connect((err, client) => {
        if (err) throw err;
        // luodaan kysely
        client.query('select * from comment', (err, data) => {
            if (err) throw err;
            client.release();
            callback(data.rows);
        });
    });
}

module.exports = {getAllQuestions, getAllComments};