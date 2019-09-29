import React from 'react';
import { Grid, AppBar, Toolbar } from '@material-ui/core';
import Item from './Item/Item';
import { Link } from 'react-router-dom';

function Sponsorship() {
  return (
    <Grid style={{ backgroundColor: "lightgray", height: "100vh" }} container direction="column">
        <AppBar position="static">
            <Toolbar>トイレ協賛店舗</Toolbar>
        </AppBar>
        <Grid style={{ padding: "3rem" }} spacing={4} container direction="column">
            <Grid item>
                <Item isOpen name="ポプラ クリスタルプラザ店" url="https://goo.gl/maps/bsxbCYHSRLCQmhxQ9" />
            </Grid>
            <Grid item>
                <Item name="ファミリーマート 小町店" url="https://goo.gl/maps/d5ppvVtxwzRFToBF9" />
            </Grid>
            <Grid item>
                <Item isOpen name="セブン‐イレブン 広島宝町店" url="https://goo.gl/maps/4LubzaZACBw6SP9A8" />
            </Grid>
        </Grid>
        <Link to="/">トイレ空き状況マップ</Link>
    </Grid>
  );
}

export default Sponsorship;
