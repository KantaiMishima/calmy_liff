import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Grid, makeStyles } from "@material-ui/core";
import './App.css';

const useStyles = makeStyles(()=>{
  return {
    container: {
      height: "100vh"
    },
    item: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      backgroundColor: "lightBlue",
      border: "solid gray 1px"
    }
  };
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.item}>親しい友達登録</Grid>
        <Grid item xs={6} className={classes.item}>部屋を見る</Grid>
      </Grid>
    </div>
  );
}

export default App;
