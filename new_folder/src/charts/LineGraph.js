import React, { Component } from 'react'
import Chart from "chart.js";
import jsonFile from '../jsonFiles/jsonFile'

export default class LineGraph extends Component {
    chartRef = React.createRef();

    // jsonType = props.json;

    // labels = jsonFile.this.jsonType.map(function(e) {
    //     if(this.jsonType === 'jsonarrayOne')
    //         return e.Product;
    //     else if(this.jsonType === 'jsonarrayTwo')
    //         return e.Month;
    //     else if(this.jsonType === 'jsonarrayThree')
    //         return e.Products; 
    //     else if(this.jsonType === 'jsonarrayFour')
    //         return e.City;
    //  });
    
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
