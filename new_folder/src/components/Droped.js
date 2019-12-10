import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core'
import { ItemTypes } from '../Constants'
import { useDrop } from 'react-dnd'
import Text from './Cards/Text';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    navigation: {
      height: '8%'
    },
    grid: {
      padding: '1rem',
    },
    half: {
      height: '92%',
      width: '49%',
      position: 'fixed',
      bottom: 0,
      padding: '5px'
    },
    left: {
      left: 0,
      //borderRight: '2px dashed black',
      backgroundColor:'gray',
    },
    right: {
      right: 0,
      backgroundColor:'beige',
    },
    top: {
      height: '50%',
      top: 0,
      borderBottom: '2px dashed black',
      overflow: 'hidden',
      padding:20,
    },
    bottom: {
      height: '50%',
      bottom: 0,
    }
  });

  
const Droped = (props) => {
    const classes = useStyles();
    const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: () =>props.update(),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	})
    return(
    <Grid className={`${classes.half} ${classes.right}`}>
         <Grid container spacing={3}>
              {props.list.map((dummy, key) => (
                <Grid key={key} item sm={6} xs={6}>
                  <Text title={dummy.title} value={dummy.value} />
                </Grid>
              ))}
            </Grid>
    </Grid>)
}

export default Droped;