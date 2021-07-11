import React, { Fragment } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { COLUMN_CHART, LINE_CHART, DONUT_CHART, PIE_CHART, TABLE_CHART } from '../../Constants/Constants';
import { openLineChart, openDonutChart, openPieChart, openColumnChart } from '../../Utils/Utils';
import ContentPreview from '../ContentPreview/ContentPreview';

const Chart = ({ element }) => {
    let options = ""
    if (element === LINE_CHART) {
        options = openLineChart()
    } else if (element === DONUT_CHART) {
        options = openDonutChart()
    } else if (element === PIE_CHART) {
        options = openPieChart()
    } else if (element === COLUMN_CHART) {
        options = openColumnChart()
    } else if (element === TABLE_CHART) {
        console.log("table chaart")
        options = TABLE_CHART
    }
    return (
        <Fragment>
            {options !== TABLE_CHART ? <HighchartsReact highcharts={Highcharts} options={options} /> : <ContentPreview />}
        </Fragment>
    )
}

export default Chart