# Tinder_Clone

`npx create-react-app tinder-clone`

### `Creating Firebase`
firebase will only be used to host the front end of the application.

### `Starting the Project`
Clean up your code.
```js
// src/index.js
*{
  margin: 0;
}

//.....
```

### `Header Component`

we will be using Material UI
```
npm install @mui/material
npm install @mui/icons-material
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @mui/material @emotion/react @emotion/styled
```

```js
// /src/components/Header.js
import React from 'react'
import './Header.css';

import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
    return (
        <div className="header">
            <h2>Header</h2>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header

```
to make the `PersonIcon` a button we will need `IconButton`

```js
// /src/components/Header.js
import React from 'react'
import './Header.css'
import tinderLogo from '../../assets/images/tinder.svg'

import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';


function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__logo" />
            </IconButton>

            <img
            className="header__logo"
            src={tinderLogo}
            alt="Tinder Logo"
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header__logo" />
            </IconButton>

        </div>
    )
}

export default Header

```
```css
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__logo{
    object-fit: contain;
    height: 40px;
}
```


    Steps:
    1. create a Header component
    2. install Material UI dependencies
    3. import the Icons form material UI
    4. use display: flex; and align items to the center and add justify the content to space between the items will be equal.
    5. download the tinder svg, import it from '../../assets/images/tinder.svg' and use it as a logo


