import pool from '../db.js'
import express from 'express'

const subRouter = express.Router()

subRouter.route("/")
    .get((req, res) => {
        pool
            .query('SELECT * FROM destinations;')
            .then(data => res.send(data.rows))
            .catch(e => res.send(e));
    })
    //     .get((req, res) => {
    //         const { id } = req.params.toLowerCase();
    //         pool
    //             .query('SELECT * FROM orders WHERE user_id=$1;', [id])
    //             .then(data => res.json(data))
    //             .catch(e => res.sendStatus(500));
    //     })
    .post((req, res) => {
        const { title, body, location, destImage, travelRegion } = req.body;
        pool.query(`
        INSERT INTO destinations (title, body, location, destImage, travelRegion) 
        VALUES ($1, $2, $3, $4, $5)`, [title, body, location, destImage, travelRegion])
            .then(data => res.status(201).json(data))
            .catch(e => res.send(e));
    })

subRouter.route("/:id")
    .get((req, res) => {
        const { id } = req.params.toLowerCase();
        pool
            .query('SELECT * FROM destinations WHERE title=$1;', [id])
            .then(data => res.json(data.rows))
            .catch(e => res.send(e));
    })

// .put((req, res) => {
//     const { id } = req.params.toLowerCase();
//     const { date } = req.body;
//     pool.query('UPDATE orders SET date=$1 WHERE id=$2 RETURNING *;', [date, id])
//         .then(data => res.status(201).json(data))
//         .catch(e => res.sendStatus(404));
// })
// .delete((req, res) => {
//     const { id } = req.params.toLowerCase();
//     pool.query('DELETE orders WHERE id=$1;', [id])
//         .then(data => res.status(201).json(data))
//         .catch(e => res.sendStatus(404))
// })

export default subRouter;