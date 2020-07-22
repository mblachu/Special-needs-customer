const express = require('express');
const apiRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./commentsDataBase.sqlite');




apiRouter.get('/', (req, res, next) => {
    console.log(req.query.sortBy);

    if (req.query.sortBy == 'recent') {
        db.all("SELECT * FROM Comments ORDER BY id DESC", (err, rows) => {
            res.status(200).send({ comments: rows })
        })
    } else {
        db.all("SELECT * FROM Comments ORDER BY likes DESC LIMIT 5", (err, rows) => {
            res.status(200).send({ comments: rows })
        })}

  
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
});

apiRouter.put('/:commentId/addlike', (req, res, next) => {
    console.log(req.params.commentId);
    console.log(req.body.likes);
    db.run("UPDATE Comments SET likes = $likes WHERE Comments.id = $id ",
        {
            $likes: req.body.likes,
            $id: req.params.commentId
        }, (err, row) => {
            res.status(201).send();
        })
});


module.exports = apiRouter;