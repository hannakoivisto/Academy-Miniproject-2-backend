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
        client.query('SELECT * FROM question', (err, data) => {
            if (err) throw err;
            client.release();
            callback(data.rows);
        });
    });
}

function getSingleQuestion(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('select * from question where id = $1', [req.params.id], (err, data) => {
            if (err) throw err;
            client.release();
            callback(data.rows);
        });
    });
}

function createQuestion(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        // let date = Date(Date.now())
        // console.log(date);
        client.query('INSERT INTO question (title, topic, optiona, optionb, username) VALUES ($1, $2, $3, $4, $5)',
        [req.body.title, req.body.topic, req.body.optiona, req.body.optionb, req.body.username], (err, data) => {
            if (err) throw err;
            client.release();
            callback();
        });
    });
}

function deleteQuestion(req, res, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('DELETE FROM question WHERE id = $1',
            [parseInt(req.params.id)], (Err, data) => {
                if (err) throw err;
                client.release();
                res.status(200)
                    .json({
                        status: 'Onnistui',
                        message: 'Poistettiin kysymys.'
                    });
                callback();
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

module.exports = { getAllQuestions, getSingleQuestion, createQuestion, deleteQuestion, getAllComments };