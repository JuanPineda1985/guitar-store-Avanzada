import React from 'react'
import {Link as RouterLink} from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Typography, Button, Link} from '@material-ui/core';
const HeaderComponent = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    
                </IconButton>
                <Link color="inherit" component={RouterLink} to="/login">Login</Link>
                <Link color="inherit" component={RouterLink} to="/register">Register</Link>
                
            </Toolbar>
        </AppBar>
    )
}

export default HeaderComponent
