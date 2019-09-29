import React, { useState, useEffect } from 'react';
import { Grid, AppBar, Toolbar } from '@material-ui/core';
import img from "./image.png";
import InsertEmoticonTwoToneIcon from '@material-ui/icons/InsertEmoticonTwoTone';
import SentimentVeryDissatisfiedTwoToneIcon from '@material-ui/icons/SentimentVeryDissatisfiedTwoTone';

/** アイコンのポジション */
const tirePosition = {
    backgroundColor: 'white',
    position: 'absolute',
    top: '32%',
    left: '30%',
}

function MainMap(props) {
    return (
        <Grid container direction="column">
            <AppBar position="static">
                <Toolbar>トイレ空き状況</Toolbar>
            </AppBar>
            <Grid style={{ position: 'relative' }} container direction="column">
                <img alt="" style={{ width: '100vw' }} src={img} ></img>,
                {props.isOpen ? <InsertEmoticonTwoToneIcon fontSize="large" color="primary" style={tirePosition} /> : <SentimentVeryDissatisfiedTwoToneIcon fontSize="large" color="secondary" style={tirePosition} />}
            </Grid>
        </Grid>
    );
}

export default MainMap;
