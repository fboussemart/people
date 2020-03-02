const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/db');

const express = require("express");
const router = express.Router();

function getAvatar(req, res, next) {
    db.get(
        "select count(*) as n from avatar",
        (err, row) => {
            req.body.avatar = 'avatar' + Math.max(1, Math.floor(Math.random() * row.n)) + '.png';
            next();
        }
    )
}

router
    .get('/persons',
        (req, res) => {
            const minScore = (req.query && req.query.minScore) ? +req.query.minScore : 0;
            db.all(
                "select * from person where score >= ?",
                minScore,
                (err, rows) => res.json(rows)
            );
        })
    .get("/persons/:id", (req, res) => {
        db.get(
            "select * from person where id= ?",
            req.params.id,
            (err, rows) => res.json(rows)
        );
    })
    .post('/persons', getAvatar,
        (req, res) => {
            db.run(
                "insert into person(firstname,lastname,score,avatar) values(?,?,?,?)",
                [req.body.firstname, req.body.lastname, req.body.score, req.body.avatar],
                (err, rows) => res.status(201).end()
            )
        })
    .delete('/persons/:id',
        (req, res) => {
            db.run(
                "delete from person where id=?",
                req.params.id,
                (err, rows) => res.status(204).end()
            );
        });


module.exports = router;