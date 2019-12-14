import React, { Component } from 'react'
import Chart from "chart.js";

export default class PieGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const  chartTitle  = this.props.title
        const { pieData } = this.props
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            
            responsive:true,
            type: "doughnut",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March","October","December"],
                datasets: [
                 pieData
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
                },
                legend:{
                    display:false,
                    fontSize:1,
                    fontColor:'#666',

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
