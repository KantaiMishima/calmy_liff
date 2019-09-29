import React from 'react';
import { Grid, AppBar, Toolbar, Box } from '@material-ui/core';
import img from "./image.png";
import InsertEmoticonTwoToneIcon from '@material-ui/icons/InsertEmoticonTwoTone';
import SentimentVeryDissatisfiedTwoToneIcon from '@material-ui/icons/SentimentVeryDissatisfiedTwoTone';
import { Link } from 'react-router-dom';

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
            <Box height="3rem" display="flex" alignItems="center" paddingLeft="1rem">
                トイレ空き状況マップ
            </Box>
            <Grid style={{ position: 'relative' }} container direction="column">
                <img alt="" style={{ width: '100vw' }} src={img} ></img>,
                {props.isOpen ? <InsertEmoticonTwoToneIcon fontSize="large" color="primary" style={tirePosition} /> : <SentimentVeryDissatisfiedTwoToneIcon fontSize="large" color="secondary" style={tirePosition} />}
                <InsertEmoticonTwoToneIcon
                    fontSize="large"
                    color="primary"
                    style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: '25%',
                        left: '80%',
                    }}
                />
                <SentimentVeryDissatisfiedTwoToneIcon
                    fontSize="large"
                    color="secondary"
                    style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: '40%',
                        left: '90%',
                    }}
                />
            </Grid>
            <Link to="/sponsorship">トイレ協賛企業</Link>
        </Grid>
    );
}

export default MainMap;
