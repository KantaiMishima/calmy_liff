import React from 'react';
import { Grid, AppBar, Toolbar } from '@material-ui/core';
import img from "./img.png";

function MainMap() {
  return (
    <Grid container direction="column">
        <AppBar position="static">
            <Toolbar>トイレ空き状況</Toolbar>
        </AppBar>
        <img style={{ maxWidth: '100vw' }} src={img} ></img>
    </Grid>
  );
}

export default MainMap;
