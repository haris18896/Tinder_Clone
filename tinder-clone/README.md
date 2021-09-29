# Tinder_Clone

## `Tinder Card`

for the tinder card we are going to install the dependencies.
`npm i react-tinder-card`

after that we will need a `state` for the people
```js
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg'
        }
    ]);
```

```js
// /src/components/tinderCard/TinderCards.js
import React, {useState} from 'react';
import './TinderCards.css'

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg'
        },
        {
            name: 'Jeff Bezos',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xyU0jrUhPzCT7_Uhnn3KNiBaHJOgGMVnwg&usqp=CAU'
        },
    ]);

    return (
        <div className="tinderCards">
            {people.map  (person => (
                <h1>{person.name}</h1>
            ))}
        </div>
    )
}

export default TinderCards

```

after this we are going to map through the people array and display the name and the image on the tinderCard.

```js
// src/components/tinderCard/TinderCards.js
import React, {useState} from 'react';
import './TinderCards.css';

import TinderCard from 'react-tinder-card'

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg'
        },
        {
            name: 'Jeff Bezos',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xyU0jrUhPzCT7_Uhnn3KNiBaHJOgGMVnwg&usqp=CAU'
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen');
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map  (person => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards

```

```css
 /* /src/components/tinderCard/TinderCards.css */
.card{
    position:relative;
    background-color:white;
    width:600px;
    max-width: 85vw;
    padding: 20px;
    height: 50vh;
    box-shadow: 0px 18px 53px 0px rgba(0,0,0,0.3);
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    background-size: cover;
    background-position: center;
}
```

after that we are going to target the the cardContainer
```css
 /* /src/components/tinderCard/TinderCards.css */
   /* //.......... */
.tinderCards__cardContainer{
    display: flex;
    justify-content: center;
    margin-top: 10vh;
}

.swipe{
    position: absolute;
}

.cardContent{
    width: 100%;
    height: 100%;
}

.card h3{
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: white;
}
```

    Steps:
    1. install the tinder card dependencies.
    2. create a state for the people
    3. map through the people array and render the result.
    4. render the image of the person on the tinderCard.
    5. and then add styling using css
