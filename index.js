// http://localhost:8080/users/91283712?sort=price
import express from 'express';
import database from './database.json' assert {type: "json"}
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.json(database));

// app.get('/', (req, res) => res.send(`
//     <h1>hello welcome to my website</h1>
//     <a href="/news">go to news page</a>
// `));
// app.get('/news', (req, res) => res.send('this is the news page welcome!'));
// app.get('/data', (req, res) => res.json({ name: "bruno", bio: "i like coding" }));

// app.get('/users/:id', (req, res) => {
//     console.log(req.params.id); // 1
//     console.log(req.query); // name
//     res.send("sorry database is offline, try again later")
// });


app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));