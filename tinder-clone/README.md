# Tinder_Clone

## `Swipe Functionality`

```js
// /src/App.js
import React from 'react';
import Header from './components/header/Header';
import TinderCards from './components/tinderCard/TinderCards';
import SwipeButtons from './components/swipeButtons/SwipeButtons'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
```

```js
// /src/components/swipeButtons/SwipeButtons.js
import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';


function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
```

```css
/* // /src/components/swipeButtons/SwipeButtons.css */
.swipeButtons{
    position: fixed;
    bottom: 5vh;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}

.swipeButtons .MuiIconButton-root{
    background-color: #fff;
    box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important;
}

.swipeButtons__repeat{
    padding: 1vw !important;
    color: #f5b748 !important;
}

.swipeButtons__left{
    padding: 1vw !important;
    color: #ec5e6f !important;
}

.swipeButtons__star{
    padding: 1vw !important;
    color: #62b4f9 !important;
}

.swipeButtons__right{
    padding: 1vw !important;
    color: #76e2b3 !important;
}

.swipeButtons__lightning{
    padding: 1vw !important;
    color: #915dd1 !important;
}
```


    Steps:
    1. Create a new component called `SwipeButtons`
    2. wrap every icon in the IconButton component
    3. add a className to each IconButton
    4. add styling in `SwipeButtons.css` file.