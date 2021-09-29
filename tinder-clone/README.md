 # Tinder_Clone

## `Backend`
```sh
# to run the backend server we will need nodemon and we have to install it globally because we will need it in every application.

npm i -g nodemon
```

create a backend directory and `cd` into it, also we will be using a `git` version control system.
`git init` don't do this if you are using it in the same repository

```sh
npm init
# answer the following questions like given below
```

our entry point will be `server.js`

```sh
package name: (tinder-backend)
version: (1.0.0)
description: tinder backend
entry point: (index.js) server.js
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to D:\2) Codes\Tinder_Clone\tinder-backend\package.json:

{
  "name": "tinder-backend",
  "version": "1.0.0",
  "description": "tinder backend",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
```

after the above settings it will create a package.json file in the backend directory for us.

```js
// /tinder-backend/package.json
{
  "name": "tinder-backend",
  "version": "1.0.0",
  "description": "tinder backend",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

to add that `ES6` syntax to Node.js we need to change the package.json file to the following
```json
// /tinder-backend/package.json
{
//   "name": "tinder-backend",
//   "version": "1.0.0",
//   "description": "tinder backend",
//   "main": "server.js",
  "type": "module",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
//   },
//   "author": "",
//   "license": "ISC"
}

```

create `server.js` file in the backend directory, where all the logic goes.
we need to install couple of dependencies in the backend directory.

```sh
npm install express mongoose
```

after that we are going to create a `mongoDB database`.

    Steps:
    1. Create a new directory `tinder-backend`, and `cd` into it.
    2. `npm init` and answer the questions.
    3. entry point will be server.js
    4. this will create a package.json file for us
    5. add `type: module` and `start: node server.js` to the package.json file
    6. create `server.js` file iin the backend directory
    7. install express and mongoose
    8. create a mongoDB database


## `MongoDB`
Now we are going to create a mongoDB database. for that we have to go to the `https://www.mongodb.com/`

we don't have to be worry about hosting our database, with mongoDB our database will be hosted online.

to create new project go to the left corner and click on `New Project`, that will setup a completly new project.

name the project `tinder-clone`.

after that you can add members to your project if you have a team. and then hit `create project`.

    Steps:
    1. go to the `https://www.mongodb.com/`
    2. create new project in the mongoDB

## `Express`
import express form 'express' and mongoose from 'mongoose' in the `server.js` file

the things we are going to do in the `server.js` file are:
```js
// /tinder-backend/server.js
import express from 'express';
import mongoose from 'mongoose';

// App Config

// middleware

// DB config

// API Endpoints

// Listener

```

after that we are going to create an instance of express and call it `app`.
we need to define the port where our application needs to listen. 
```js
// /tinder-backend/server.js
//....
//....

// App Config
const app = express();
const port = process.env.PORT || 8001;
```

after that we will define our very first `API endpoints`. for now we don't need to worry about `middleware and DB config`.

the `/` endpoint will be root endpoint. and then we will have a call back function with a `request` and `response` parameter. and then in the arrow function we will return a response status of 200 and a message.

if the request status is `200` then the message `Hello thereeeeee` will be shown to us on the root url with port 8001, which we have set in the app configuration
```js
// /tinder-backend/server.js
//....
//....

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello thereeeeee'));
```

and now we need the `listener`, with a call back function.
```js
// /tinder-backend/server.js
//....
//....

// Listener
app.listen(port, () => console.log(`Listening on localhost ${port}`))
```


at this point it should be working, the whole application is running on port 8001 and the code until now is
```js
// /tinder-backend/server.js
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
```

install the `nodemon` dependency to run the backend server.
```sh
npm i -g nodemon
```

and to run the backend server we need to run the following command.
```sh
nodemon server.js
```

    Steps:
    1. import Express and mongoose in server.js file
    2. we are going to do the following things in the server.js file: 
        i. App Config
        ii. middleware
        iii. DB config
        iv. API Endpoints
        v. Listener
    3. create an instance of express and call it `app`.
    4. define the port where our application needs to listen.
    5. define the `API endpoints`, for now don't worry about `middleware` and `db config`.
    6. `/` will be the root url, and make a call back function with request and response
    7. console.log the port so that we can see that our application is running on port 8001.
    8. to run the server we need `nodemon` to be installed. `npm i -g nodemon` we are going to install it globally.
    9. to run the server `nodemon server.js`

at this point our backend is running at `http://localhost:8001/`

## `Connecting our database to MongoDb`



