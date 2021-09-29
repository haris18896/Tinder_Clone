import React from 'react'
import './Header.css';

import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';


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
