import React, { Component } from 'react'
import Chart from "chart.js";

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March","October","December"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 39, 91,78,42],
                        borderColor:'white',
                        backgroundColor:['rgba(75, 192, 192, 1)','rgba(255, 206, 86, 1)','rgba(54, 162, 235, 1)','rgba(255, 159, 64, 1)']
                        
                        
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        gridLines :{color : '#ffffff',
                        drawBorder : false},
                        ticks: {
                            beginAtZero: true,
                            display : false
                            
                            
                        }
                    }],
                    xAxes: [{
                        gridLines :{
                            color : '#ffffff',
                            drawBorder : false,
                            zeroLineColor:'transparent'},
                        ticks: {
                            beginAtZero: true,
                            display: false
                            
                            
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
