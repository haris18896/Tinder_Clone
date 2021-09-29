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



    Steps:
    1. create a Header component
    2. install Material UI dependencies
    3. import the Icons form material UI


