const express = require('express');
const apiRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./commentsDataBase.sqlite');




apiRouter.get('/', (req, res, next) => {

    db.all("SELECT * FROM Comments", (err, rows) => {
        res.status(200).send({comments: rows})
    })
});

apiRouter.get('/:commentId', (req, res, next) => {
    db.get(`SELECT * FROM Comments WHERE id = ${req.params.commentId}`, (err, row) => {
        res.status(200).send({ comment: row })
    })
});


apiRouter.post('/', (req, res, next) => {
    db.run("INSERT INTO Comments (original, answer, wish, color_patern) VALUES ($original, $answer, $wish, $color)",
        {
            $original: req.body.original,
            $answer: req.body.answer,
            $wish: req.body.wish,
            $color: req.body.color_patern
        },

        (err, row) => {
       
    })
})


module.exports = apiRouter;