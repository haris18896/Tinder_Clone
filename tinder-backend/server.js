import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors'

// App Config
const app = express();
const port = process.env.PORT || 8001;

const connection_url = `mongodb+srv://admin:NZgqRv2tq0UXZXxn@cluster0.gqlhg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// middleware
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url,
    async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello thereeeeee'));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });
});


app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});
// Listener
app.listen(port, () => console.log(`Listening on localhost ${port}`))
