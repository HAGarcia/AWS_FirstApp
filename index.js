const  express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')   //

var friends = require('./data.json')

const config = {
    name: "Dockerized API",
    port: 3000,
    host: '0.0.0.0'
}

const app = express();

app.use(bodyParser.json());
app.use(cors());    //Significa que puede recibir trafico de cualquier origen

app.get('/friends', (req, res) => {
    res.status(200).send(friends)
})

app.post('/friends', (req, res) => {
    //let es similar a var, pero es para variables de bloque
    let new_friends = {
        name: req.body.name,
        school: req.body.school
    }
    friends.push(new_friends);
    res.status(200).send({
        message: "Registrado con éxito",
        item: new_friends
    });
})

app.get('/', (req, res) => {
    res.status(200).send("Hola Mundo!")
} )

app.listen(config.port, config.host, () => {
    console.log(`Running on http://${config.host}:${config.port}`);
});