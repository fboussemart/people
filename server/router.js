const express = require("express");
const router = express.Router();
const People = require('./data/array');

router
    .get("/persons", (req, res) => {
        const minScore = (req.query && req.query.minScore) ? +req.query.minScore : 0;
        res.json(People.getPersons(minScore));
    })
    .get("/persons/:id", (req, res) => {
        res.json(People.getPerson(req.params.id));
    })
    .post('/persons',
        (req, res) => {
            const p = People.insertPerson(req.body);
            res.status(201).json(p);
        })
    .delete('/persons/:id',
        (req, res) => {
            People.removePerson(req.params.id);
            res.status(204).end();
        })
    .patch('/persons',
        (req, res) => {
            People.updatePerson(req.body);
            res.status(200).json(req.body);
        });

module.exports = router;