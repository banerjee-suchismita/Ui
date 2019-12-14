import React, { Component } from 'react'
import Chart from "chart.js";

export default class PolarGraph extends Component {
    chartRef = React.createRef();
       
    componentDidMount() {
       const chartTitle = this.props.title
        const { polarData } = this.props
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "polarArea",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March","October","December"],
                
                datasets: [
                    polarData
                ]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                              return tooltipItem.yLabel;
                       }
                    }
                },
                title: {
                    display: true,
                    fontSize:10,
                    padding:0,
                    text: chartTitle
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            stepSize:30,
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
    render() {
        return (
            <div style={{width:200 ,height:200,padding:0 }}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
