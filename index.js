// http://localhost:8080/users/91283712?sort=price
import express from 'express';
//import database from './database.json' assert {type: "json"}
//import continentData from './continentData.json' assert {type: "json"}
//import destinationData from './destinationData.json' assert {type: "json"}
import continentsRouter from './continents/routes.js'
import destinationsRouter from './destinations/routes.js'
import cors from "cors"


const app = express();
const port = process.env.PORT || 8080;


app.use(cors())
app.use(express.json())
app.use('/continents', continentsRouter)
app.use('/destinations', destinationsRouter)

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// })
//     .get('/continentData', (req, res) => res.json(continentData))
//     .get('/destinationData', (req, res) => res.json(destinationData))


app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));