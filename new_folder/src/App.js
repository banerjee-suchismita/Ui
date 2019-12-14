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
import PolarGraph from './charts/PolarGraph'
import jsondata from './charts/data.json'
import {withStyles} from '@material-ui/core/styles';

const styles = {
  root:{
    flexGrow:1,
  },
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
    
    
  },
  right: {
    right: 0,
    paddingLeft:"6rem",
    backgroundColor:'beige',
  },
  top: {
    height: '45%',
    top: 0,
    borderBottom: '1px dashed black',
    overflow: 'hidden',
    paddingTop:"1.7rem",
    paddingLeft:"1.5rem",
    backgroundColor:'#515A5A',
  },
  bottom: {
    height: '50%',
    bottom: 0,
    paddingLeft:"1.5rem",
    paddingTop:"0.5rem",
    backgroundColor:'#5D6D7E'
  }
};

const dummyValues = [
  { id: 0, title: "First Chart", value: "LineGraph1"},
  { id: 1, title: "Second Chart", value: "BarGraph1"},
  { id: 2, title: "Third Chart", value: "PieGraph1"},
  { id: 3, title: "Fourth Chart", value: "PolarGraph1"},
  { id: 4, title: "First Chart", value: "BarGraph2"},
  { id: 5, title: "Second Chart", value: "PieGraph2"},
  { id: 6, title: "Third Chart", value: "PolarGraph2"},
  { id: 7, title: "Fourth Chart", value: "LineGraph2"},
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      container: []
    }
  }

  onDragStart = (e, v) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", v)
  }

  allowDrop = ev => {
    ev.preventDefault();
  }

  onDrop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    let { container } = this.state;
    container.push(data);
    this.setState({ container });
  }

  render() {
    const { items, container } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.navigation}>
        <Navbar text={"Dynamic Personalized UI - Design"} />
        <div className={classes.grid}>
          <div className={`${classes.half} ${classes.left}`}>
            <div className={`${classes.top} ${classes.root}`} >
            
              <Grid container spacing={0} >
                {dummyValues.map(dummy => {
                  if(dummy.value =='LineGraph1'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                          <Text style={{height:10}}><LineGraph lineData={jsondata.line1} title={dummy.title}/></Text>
                        </Grid>
                  }
                  if(dummy.value =='PieGraph1'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                          <Text><PieGraph pieData={jsondata.pie1} title={dummy.title}/></Text>
                        </Grid>
                  }
                  if(dummy.value =='BarGraph1'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                          <Text><BarGraph barData={jsondata.bar1} title={dummy.title}/></Text>
                        </Grid>
                  }
                  if(dummy.value =='PolarGraph1'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                          <Text><PolarGraph polarData={jsondata.polar1} title={dummy.title}/></Text>
                        </Grid>
                  }
                })}

              </Grid>
            </div>

            <div className={`${classes.bottom} ${classes.root}`}>
            
              <Grid container spacing={0} >

                {dummyValues.map(dummy => {
                  if(dummy.value =='LineGraph2'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                        <Text><LineGraph lineData={jsondata.line2} title={dummy.title}/></Text>
                      </Grid>
                  }
                  if(dummy.value =='PieGraph2'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                        <Text><PieGraph pieData={jsondata.pie2} title={dummy.title}/></Text>
                      </Grid>
                  }
                  if(dummy.value =='BarGraph2'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                        <Text><BarGraph barData={jsondata.bar2} title={dummy.title}/></Text>
                      </Grid>
                  }
                  if(dummy.value =='PolarGraph2'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,dummy.value)}>
                        <Text><PolarGraph polarData={jsondata.polar2} title={dummy.title}/></Text>
                      </Grid>
                  }
                })}
              </Grid>
            </div>
          </div>
          <Grid className={`${classes.half} ${classes.right}`} onDragOver={this.allowDrop} onDrop={this.onDrop}>
            {
              <Grid container spacing={3}  style={{paddingLeft:"1rem", paddingTop:"3rem"}}> 
              {
                container.map(i => {
                  if(i == 'LineGraph1'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><LineGraph lineData={jsondata.line1} title={"First Chart"}/></Text> </Grid>               
                  }
                  else if(i == 'PieGraph1'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><PieGraph pieData={jsondata.pie1} title={"Third Chart"}/></Text> </Grid>               
                  }
                  else if(i == 'BarGraph1'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><BarGraph barData={jsondata.bar1} title={"Second Chart"}/></Text> </Grid>               
                  }
                  else if(i == 'LineGraph2'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><LineGraph lineData={jsondata.line2} title={"Fourth Chart"}/></Text> </Grid>               
                  }
                  else if(i == 'PieGraph2'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><PieGraph pieData={jsondata.pie2} title={"Second Chart"}/></Text> </Grid>               
                  }
                  else if(i == 'BarGraph2'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><BarGraph barData={jsondata.bar2} title={"First Chart"}/></Text> </Grid>               
                  }
                  else if(i == 'PolarGraph1'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><PolarGraph polarData={jsondata.polar1} title={"Fourth Chart"}/></Text> </Grid>               
                  }
                  else if(i == 'PolarGraph2'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><PolarGraph polarData={jsondata.polar2} title={"Third Chart"}/></Text> </Grid>               
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

