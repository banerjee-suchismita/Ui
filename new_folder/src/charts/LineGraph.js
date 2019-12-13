import React, { Component } from 'react'
import Chart from "chart.js";

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March","October","December"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 39, 91,78,42],
                        borderColor:'#413C58',
                        backgroundColor : "#A3C4BC"
                        
                    }
                ]
            },
            options: {
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
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
