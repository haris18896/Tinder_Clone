 # Tinder_Clone

## `Connecting our database to MongoDb`
install cors for cross browser compatibility
`npm i cors`

click on the `databases` and then create a `cluster`, and then click on the `connect` button in the ` cluster` tab. and then click on `connect your application`

go to the `https://cloud.mongodb.com/`, in the mongoDB console, go to the `Database Access` tab in the left, and create a new `database user`. fill in the name and auto generate the password. but make sure to copy the password somewhere safe. and then click `add user`.

the admin user has been created, now go to the `Network access` tab and `add IP address` to allow list. for now click on ` allow access from everywhere`. and then click on confirm. 

`don't allow access from anywhere in the professional environment.`

after the IP address is added, it will show the status `active` and the it's connected with the cluster.
then go to the `databases` and click on `connect` in the `cluster`, and then `connect your application`


```sh
#  in the <password> we will paste the password we copied
mongodb+srv://admin:<password>@cluster0.gqlhg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

    Steps:
    0. go to the Database Access tab in the left
    1. create a `database` and then click on free `cluster`.
    2. Add new database user
    3. fill in the name and auto generate the password, but make sure to copy the password somewhere safe.
    4. click add user in the bottom
    5. go to the Network access tab
    6. `add IP address` to allow list. for now click on `allow access from everywhere`.
    7. after the IP address is added, it will show the status `active` and the it's connected with the cluster.
    8. go to the databases tab and click on `connect` in the `cluster`, and then `connect your application`
    9. 


## `Making the connection`
go to the server.js file and make connection in the `//app config`
```js
// App config
const connection_url = `mongodb+srv://admin:NZgqRv2tq0UXZXxn@cluster0.gqlhg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
```

now go to the db config.
and make a connection, and in that connection pass the connection_url from the above code, and pass some parameters which are

```js
// /tinder-backend/server.js
//.....
// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
```

the above parameters are actually parameters that are used to make our connection very smooth, because mongo is in constant development and evaluation.

after that we are going to make a `database schema` for that we will make a file called `dbCards.js` which will be a database model.

```js
// /tinder-backend/dbCards.js
import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
});

export default mongoose.model('Cards', cardSchema);
```
this is how oue database fields are gonna field up.


* in SQL we have `Tables`, but in NoSQL we have `Collections`. in collections we have `array of documents` and then that can have a collection and then that collection also can have a an array of documents and this goes like this on and on.

in the above code, `mongoose.model('cards', cardSchema)` cards is the collection name, and cardSchema is the schema or document.







    Steps:
    1. copy the `mongodb+srv://admin:<password>@cluster0.gqlhg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    2. go to the server.js file, and make connection in the `//app config`
    3. go to the `//db config` and make connection. and pass the parameters to the mongoose.connect function.
    4. create a database schema.
    5. export the model.

```js
// /tinder-clone/server.js
import express from 'express';
import mongoose from 'mongoose';

// App Config
const app = express();
const port = process.env.PORT || 8001;

const connection_url = `mongodb+srv://admin:NZgqRv2tq0UXZXxn@cluster0.gqlhg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// middleware

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello thereeeeee'));


// Listener
app.listen(port, () => console.log(`Listening on localhost ${port}`))
```

```js
// dbCards.js
import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
});

export default mongoose.model('cards', cardSchema);
```

## `creating post endpoint`

now we are going to add post endpoint to the `server.js` file for adding data to the database. here in the endpoint we can add all the endpoints like `GET, POST, PUT, DELETE`

```js
// /tinder-clone/server.js  

//..........
// API Endpoints
// here we are saving the request bod in the dbCard variable.
app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;
});
```

after that we are going to create a function in the post endpoint that will creates a new document. that function will have a call back function with `error`, and `data` parameters to handle the error and the data

```js

    // /tinder-clone/server.js
    //..........
    // API Endpoints

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
});
```

and to see the `post` endpoint is working we have to define another endpoint in the `server.js` file which will download the data from the database.

in this endpoint we aren't creating any card, instead we are find the card.

```js
// /tinder-clone/server.js
//............
// API Endpoints
//.......
app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});
```

```js
// /tinder-clone/server.js
//............
// middleware
app.use(express.json());
```

now we can open Postman to check our endpoints.
in the postman we can check `http://localhost:8001/` as a GET request, and `http://localhost:8001/tinder/cards` as a POST request.

in the `POST` request, go to the `body` in the postman and in the body go to the `raw` and change the data type to `JSON` form `Text` and paste the data that we want to save in the database.

    Steps:
    1. add post endpoint in the `server.js` file, and save the request body in the dbCard variable.
    2. import database structure `import Cards form './dbCards.js`
    3. create a function in the post endpoint that will creates a new document. that function will have a call back function with `error`, and `data` parameters to handle the error and the data `app.post(//....)`
    4. create another function to find the data from the database. `app.get(//......)`.
    5. now we can open Postman and Check all these stuff.
    6. add middleware to the `server.js` file.


```js
// /tinder-clone/server.js
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
            // the options in the database has been removed from mongoose 6.0.0 soo use the below code
// mongoose.connect(connection_url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })
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

```


## ``