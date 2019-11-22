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

function updateQuestion(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('UPDATE question SET title = $1, topic = $2, optiona = $3, optionb = $4, username = $5 WHERE id = $6',
            [req.body.title, req.body.topic, req.body.optiona, req.body.optionb, req.body.username, parseInt(req.params.id)], (err, data) => {
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

//Comments-osio alkaa tästä:

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

function getSingleComment(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('select * from comment where id = $1', [req.params.id], (err, data) => {
            if (err) throw err;
            client.release();
            callback(data.rows);
        });
    });
}

function createComment(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('INSERT INTO comment (comment, username) VALUES ($1, $2)',
            [req.body.comment, req.body.username], (err, data) => {
                if (err) throw err;
                client.release();
                callback();
            });
    });
}

function updateComment(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('UPDATE comment SET comment = $1, username = $2 WHERE id = $3',
            [req.body.comment, req.body.username, parseInt(req.params.id)], (err, data) => {
                client.release();
                callback();
            });
    });
}

function deleteComment(req, res, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('DELETE FROM comment WHERE id = $1',
            [parseInt(req.params.id)], (Err, data) => {
                if (err) throw err;
                client.release();
                res.status(200)
                    .json({
                        status: 'Onnistui',
                        message: 'Kommentti poistettiin.'
                    });
                callback();
            });
    });
}

function getAllVotes(callback) {
    // haetaan yhteys altaasta
    pool.connect((err, client) => {
        if (err) throw err;
        // luodaan kysely
        client.query('SELECT * FROM vote', (err, data) => {
            if (err) throw err;
            client.release();
            callback(data.rows);
        });
    });
}

function getVoteCount(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('select * from vote where id = $1', [req.params.id], (err, data) => {
            if (err) throw err;
            client.release();
            callback(data.rows);
        });
    });
}

function createVote(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('INSERT INTO vote (optionacounter, optionbcounter) VALUES ($1, $2)',
            [req.body.optiona, req.body.optionb], (err, data) => {
                if (err) throw err;
                client.release();
                callback();
            });
    });
}

module.exports = { getAllQuestions, getSingleQuestion, createQuestion, updateQuestion, deleteQuestion, getAllComments, getSingleComment, createComment, updateComment, deleteComment, getAllVotes, getVoteCount, createVote };