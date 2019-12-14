import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    height:119,
  }
})

const Text = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent style={{ paddingBottom: '5px', marginLeft:2 }}>
        {props.children}
      </CardContent>
    </Card>
  );
}

export default Text;