 # Tinder_Clone


## `Hooking backend to frontend`
to hook backend with frontend we are going to need `Axios` in the frontend.

```sh
npm i axios
```

create a file `axios.js` in the frontend
```js
// /src/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8001/",
})

export default instance;
```

get rid of the hardcoded array of tinderCards in the TinderCards.js file
```js
// /src/components/tinderCards/TinderCards.js
// get rid of this hardcoded array of tinderCards

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg'
        },
        {
            name: 'Jeff Bezos',
            url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHgGhTf7zPzQ/v0/1000x-1.jpg"
        },
    ]);
```
it will become like this
```js
// /src/components/tinderCards/TinderCards.js
    const [people, setPeople] = useState([]);
```

and then we will use something like `useEffect`, inside the useEffect we will be using `Async` function to fetch data.

import `import axios from '../../axios'

```js
// /src/components/tinderCards/TinderCards.js
import React, {useState, useEffect} from 'react';
import './TinderCards.css';

import TinderCard from 'react-tinder-card'
import axios from '../../axios'

function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
    },[])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
    }


    //.........
    //.........
    //.........
```

in the above code `useEffect` we are using axios from the frontend file that we have created with baseURL, after that we are using `Async await function` to make a request to that endpoint `/tinder/cards/` and then we are setting the data to the `people` state.

* at this point there is a bug, the image is not loading, we need to fix it.

 `   console.log(people);` to check that we are getting data back from the backend.

 to fix this, we have to change the `url` to `imgUrl` in the `TinderCard tag` because that's how it's defined in the backend.

 ```js
    style={{ backgroundImage: `url(${person.imgUrl})` }}
```

    Steps:
    1. install axios in the frontend
    2. create a file called 'axios.js' in the frontend
    3. get rid of the hardcoded array of tinderCards in the TinderCards.js file
    4. use `useEffect` and `Async` function to fetch data
    5. `import axios from '../../axios'` this is import from the axios file in the frontend that we created
    6. make an async await request to the backend,
    7. set the data to the `people` state
    8. call the fetchData(); function.




