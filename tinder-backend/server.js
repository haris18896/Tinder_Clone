import express from 'express';
import mongoose from 'mongoose';

// App Config
const app = express();
const port = process.env.PORT || 8001;
// middleware

// DB config

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello thereeeeee'));
// Listener
app.listen(port, () => console.log(`Listening on localhost ${port}`))
