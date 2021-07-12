import React, { Fragment, useContext, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { COLUMN_CHART, LINE_CHART, DONUT_CHART, PIE_CHART, TABLE_CHART } from '../../Constants/Constants';
import { openLineChart, openDonutChart, openPieChart, openColumnChart } from '../../Utils/Utils';
import ContentPreview from '../ContentPreview/ContentPreview';
import Context from '../../Context/Context';

const Chart = ({ element }) => {
    const enovia = useContext(Context)

    let options = ""
    if (element === LINE_CHART) {
        options = openLineChart(enovia.state)
    } else if (element === DONUT_CHART) {
        options = openDonutChart()
    } else if (element === PIE_CHART) {
        options = openPieChart(enovia.state)
    } else if (element === COLUMN_CHART) {
        options = openColumnChart(enovia.state)
    } else if (element === TABLE_CHART) {
        options = TABLE_CHART
    }
    return (
        <Fragment>
            {options !== TABLE_CHART ? <HighchartsReact highcharts={Highcharts} options={options} /> : <ContentPreview />}
        </Fragment>
    )
}

export default Chart