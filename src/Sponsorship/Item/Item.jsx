import React from 'react';
import { Card, Grid, Typography, Link } from '@material-ui/core';

function Item(props) {
  return (
    <Link rel="noopener noreferrer" target="_blank" href={props.url}>
        <Card style={{ height: "4rem" }}>
          <Grid style={{ padding: "0 1rem", height: "100%" }} container alignItems="center" justify="space-between" >
            <Typography color="primary">
              {props.name}
            </Typography>
            {props.isOpen ? <Typography variant="body1" color="primary">空席</Typography> : <Typography  variant="body1" color="secondary">満席</Typography>}
          </Grid>
        </Card>
    </Link>
  );
}

export default Item;
