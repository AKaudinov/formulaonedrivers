import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';


const Header = () => {
return (
    <div>
        <AppBar position="static" color="default">
            <Toolbar>
                <Link to="/" exact="true">
                    <Typography variant="h6" color="inherit">
                        Formula One Drivers
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
    )
};


export default Header;
