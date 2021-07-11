import { tempData } from "../Constants/Constants"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// export const parseCSV = async (url) => {
//     try {
//         const res = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'content-type': 'text/csv;charset=UTF-8',
//                 'Access-Control-Allow-Origin': '*'
//             }
//         })
//         if (res.status === 200) {
//             console.log("status 200")
//             const data = await res.text();
//             console.log(data);
//             return data

//         } else {
//             console.log(`Error code ${res.status}`);
//         }
//     }
//     catch (err) {
//         console.log("Error: ", err)
//     }
// }


export const parseCSV = () => {
    let header = Object.values(tempData[0])
    let content = Object.values(tempData.slice(1))
    return { header, content }
}

export const validateFilterData = (header, value1, value2) => {
    let valid = false
    if(header.includes(value1) && header.includes(value2)){
        valid = true
    }
    return valid
}

export const openLineChart = () => {
    const options = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'My chart'
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6]
            }
        ]
    }
    return options
}

export const openColumnChart = () => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    
        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    
        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    
        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
        }]
    }
    return options
}

export const openPieChart = () => {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in January, 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }]
        }]
    }
    return options
}

export const openTableChart = () => {
    
}

export const openDonutChart = () => {
    var colors = Highcharts.getOptions().colors,
            categories = [
                'Chrome',
                'Firefox',
                'Internet Explorer',
                'Safari',
                'Edge',
                'Opera',
                'Other'
            ],
            data = [
                {
                    y: 62.74,
                    color: colors[2],
                    drilldown: {
                        name: 'Chrome',
                        categories: [
                            'Chrome v65.0',
                            'Chrome v64.0',
                            'Chrome v63.0',
                            'Chrome v62.0',
                            'Chrome v61.0',
                            'Chrome v60.0',
                            'Chrome v59.0',
                            'Chrome v58.0',
                            'Chrome v57.0',
                            'Chrome v56.0',
                            'Chrome v55.0',
                            'Chrome v54.0',
                            'Chrome v51.0',
                            'Chrome v49.0',
                            'Chrome v48.0',
                            'Chrome v47.0',
                            'Chrome v43.0',
                            'Chrome v29.0'
                        ],
                        data: [
                            0.1,
                            1.3,
                            53.02,
                            1.4,
                            0.88,
                            0.56,
                            0.45,
                            0.49,
                            0.32,
                            0.29,
                            0.79,
                            0.18,
                            0.13,
                            2.16,
                            0.13,
                            0.11,
                            0.17,
                            0.26
                        ]
                    }
                },
                {
                    y: 10.57,
                    color: colors[1],
                    drilldown: {
                        name: 'Firefox',
                        categories: [
                            'Firefox v58.0',
                            'Firefox v57.0',
                            'Firefox v56.0',
                            'Firefox v55.0',
                            'Firefox v54.0',
                            'Firefox v52.0',
                            'Firefox v51.0',
                            'Firefox v50.0',
                            'Firefox v48.0',
                            'Firefox v47.0'
                        ],
                        data: [
                            1.02,
                            7.36,
                            0.35,
                            0.11,
                            0.1,
                            0.95,
                            0.15,
                            0.1,
                            0.31,
                            0.12
                        ]
                    }
                },
                {
                    y: 7.23,
                    color: colors[0],
                    drilldown: {
                        name: 'Internet Explorer',
                        categories: [
                            'Internet Explorer v11.0',
                            'Internet Explorer v10.0',
                            'Internet Explorer v9.0',
                            'Internet Explorer v8.0'
                        ],
                        data: [
                            6.2,
                            0.29,
                            0.27,
                            0.47
                        ]
                    }
                },
                {
                    y: 5.58,
                    color: colors[3],
                    drilldown: {
                        name: 'Safari',
                        categories: [
                            'Safari v11.0',
                            'Safari v10.1',
                            'Safari v10.0',
                            'Safari v9.1',
                            'Safari v9.0',
                            'Safari v5.1'
                        ],
                        data: [
                            3.39,
                            0.96,
                            0.36,
                            0.54,
                            0.13,
                            0.2
                        ]
                    }
                },
                {
                    y: 4.02,
                    color: colors[5],
                    drilldown: {
                        name: 'Edge',
                        categories: [
                            'Edge v16',
                            'Edge v15',
                            'Edge v14',
                            'Edge v13'
                        ],
                        data: [
                            2.6,
                            0.92,
                            0.4,
                            0.1
                        ]
                    }
                },
                {
                    y: 1.92,
                    color: colors[4],
                    drilldown: {
                        name: 'Opera',
                        categories: [
                            'Opera v50.0',
                            'Opera v49.0',
                            'Opera v12.1'
                        ],
                        data: [
                            0.96,
                            0.82,
                            0.14
                        ]
                    }
                },
                {
                    y: 7.62,
                    color: colors[6],
                    drilldown: {
                        name: 'Other',
                        categories: [
                            'Other'
                        ],
                        data: [
                            7.62
                        ]
                    }
                }
            ],
            browserData = [],
            versionsData = [],
            i,
            j,
            dataLen = data.length,
            drillDataLen,
            brightness;


        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {

            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });

            // add version data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.color(data[i].color).brighten(brightness).get()
                });
            }
        }
        const options = {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Browser market share, January, 2018'
            },
            subtitle: {
                text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'Browsers',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -30
                }
            }, {
                name: 'Versions',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function () {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                            this.y + '%' : null;
                    }
                },
                id: 'versions'
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 400
                    },
                    chartOptions: {
                        series: [{
                        }, {
                            id: 'versions',
                            dataLabels: {
                                enabled: false
                            }
                        }]
                    }
                }]
            }
        }
        return options
}