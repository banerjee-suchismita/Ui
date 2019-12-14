import React, { Component } from 'react'
import Chart from "chart.js";

export default class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount = () => {
    const { barData } = this.props
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March", "October", "December"],
        datasets: [
          barData
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 30,
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  render() {
    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}
