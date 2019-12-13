import React, { Component } from 'react'
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import Navbar from './components/Navbar';
import Text from './components/Cards/Text';
import Grid from '@material-ui/core/Grid'
import LineGraph from './charts/LineGraph'
import PieGraph from './charts/PieGraph'
import BarGraph from './charts/BarGraph'
import {withStyles} from '@material-ui/core/styles';



const styles = {
  navigation: {
    height: '8%',

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
    color:'white',
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
    padding:20
  }
};

const dummyValues = [
  { id: 0, title: "John wick", value: "LineGraph" },
  { id: 1, title: "Dodo", value: "PieGraph" },
  { id: 2, title: "Duck", value: "BarGraph" },
  { id: 3, title: "Fuck", value: "LineGraph" },
]

 class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      container : []
    }
  }

  onDragStart = (e,v) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain",v)
  }

  allowDrop = ev => {
    ev.preventDefault();
  }

  onDrop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    let {container} = this.state;
    container.push(data);
    this.setState({container});
  }

  render(){
    const {items, container} = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.navigation}>
        <Navbar />
        <div className={classes.grid}>
          <div className={`${classes.half} ${classes.left}`}>
            <div className={classes.top}>
              <Grid container spacing={3} >
  
                {/* <Grid  sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,new LineGraph)}>
                  <Text><LineGraph /></Text>
                </Grid>

                <Grid  sm={5} xs={5} draggable="true" onDragStart={(e) => this.onDragStart(e,"text")}>
                  <Text><LineGraph /></Text>
                </Grid> */}

                {/* {dummyValues.map((dummy,key) => (
                  <Grid key={key} sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>

                    <Text><LineGraph/></Text>             
                    <Text><PieGraph/></Text>            
                </Grid>
                ))} */}

                {dummyValues.map(dummy => {
                  if(dummy.value =='LineGraph'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                          <Text><LineGraph/></Text>
                        </Grid>
                  }
                  if(dummy.value =='PieGraph'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                          <Text><PieGraph/></Text>
                        </Grid>
                  }
                  if(dummy.value =='BarGraph'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                          <Text><BarGraph/></Text>
                        </Grid>
                  }
                })}
         
              </Grid>
            </div>
            <div className={classes.bottom}>
              <p>dodo duck lives here</p>
            </div>
          </div>
          <Grid className={`${classes.half} ${classes.right}`} onDragOver={this.allowDrop} onDrop={this.onDrop}>
            {
              <Grid container spacing={3}  style={{padding:2}}> 
              {
                container.map(i => {
                  if(i == 'LineGraph'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><LineGraph/></Text> </Grid>               
                  }
                  else if(i == 'PieGraph'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><PieGraph/></Text> </Grid>               
                  }
                  else if(i == 'BarGraph'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><BarGraph/></Text> </Grid>               
                  }
                })
              }
              </Grid>
            
            }
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)

