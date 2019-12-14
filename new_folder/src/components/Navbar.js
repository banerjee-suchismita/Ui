import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import ToolBar from '@material-ui/core/ToolBar'

const Navbar = (props) => {
    return (
        <div>
            <AppBar>
                <ToolBar>
                    <Typography variant = "heading" component = "h2">
                        {/* Dynamic Personalized UI - Design */}
                        {props.text}
                    </Typography>
                </ToolBar>
            </AppBar>

        </div>
    );
}

export default Navbar;