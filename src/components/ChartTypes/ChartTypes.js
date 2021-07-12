import React, { useContext, useRef, useState } from 'react'
import Context from '../../Context/Context'
import { COLUMN_CHART, DONUT_CHART, LINE_CHART, PIE_CHART, TABLE_CHART, CHART, PREV_PAGE, OPEN_ALERT } from '../../Constants/Constants'
import Chart from '../Chart/Chart'
import { validateFilterData } from '../../Utils/Utils'
import Alert from '../Alert/Alert'



const ChartTypes = () => {
    const enovia = useContext(Context)
    const lineRef = useRef(null)
    const pieRef = useRef(null)
    const columnRef = useRef(null)
    const donutRef = useRef(null)
    const tableRef = useRef(null)
    const test = useRef(null)
    const [element, setElement] = useState('')
    const [axisX, setAxisX] = useState("")
    const [axisY, setAxisY] = useState("")

    const openChart = (button) => {
        if (validateFilterData(enovia.state.data.header, axisX, axisY)) {
            setElement(button)
            const positionX = enovia.state.data.header.indexOf(axisX)
            const positionY = enovia.state.data.header.indexOf(axisY)
            enovia.setData(CHART, { ...enovia.state, positionX, positionY })
        } else {
            enovia.setData(OPEN_ALERT, "Ошибка. Таких полей в файле не существует")
        }
        
        console.log("test ",test)
        console.log("test current",test.current)
    }

    const openPreviewPage = () => {
        enovia.setData(PREV_PAGE, enovia.state)
    }

    return (
        <div className="container">
            <div className="wrapper">
                <div className="back-page">
                    <a
                        onClick={() => openPreviewPage()}
                    ><img src="https://img.icons8.com/color/50/000000/back--v1.png" /></a>
                </div>
                <div className="content">

                    <div className="header-content">
                        <h3>
                            ВЫБЕРИТЕ СПОСОБ ОТОБРАЖЕНИЯ
                        </h3>
                    </div>

                    <div className="graph-type">
                        <div className="line-chart">
                            <div className="type-img">
                                <a ref={lineRef}
                                    className={LINE_CHART}
                                    onClick={() => openChart(lineRef.current.className)}><img className="img line" src="https://img.icons8.com/color/50/000000/line-chart--v1.png" /></a>
                            </div>
                            <div className="type-name">
                                <h4>
                                    Line
                                </h4>
                            </div>
                        </div>
                        <div className="line-chart">
                            <div className="type-img">
                                <a ref={pieRef}
                                    className={PIE_CHART}
                                    onClick={() => openChart(pieRef.current.className)}><img className="img" src="https://img.icons8.com/color/50/000000/pie-chart--v1.png" /></a>
                            </div>
                            <div className="type-name">
                                <h4>
                                    Pie
                                </h4>
                            </div>
                        </div>
                        <div className="line-chart">
                            <div className="type-img">
                                <a ref={columnRef}
                                    className={COLUMN_CHART}
                                    onClick={() => openChart(columnRef.current.className)}><img src="https://img.icons8.com/color/50/000000/combo-chart--v1.png" /></a>
                            </div>
                            <div className="type-name">
                                <h4>
                                    Column
                                </h4>
                            </div>
                        </div>
                        <div className="line-chart">
                            <div className="type-img">
                                <a ref={donutRef}
                                    className={DONUT_CHART}
                                    onClick={() => openChart(donutRef.current.className)}><img src="https://img.icons8.com/color/50/000000/doughnut-chart--v1.png" /></a>
                            </div>
                            <div className="type-name">
                                <h4>
                                    Donut
                                </h4>
                            </div>
                        </div>
                        <div className="line-chart">
                            <div className="type-img">
                                <a ref={tableRef}
                                    className={TABLE_CHART}
                                    onClick={() => openChart(tableRef.current.className)}><img src="https://img.icons8.com/color-glass/50/000000/table-1.png" /></a>
                            </div>
                            <div className="type-name">
                                <h4>
                                    Table
                                </h4>
                            </div>
                        </div>
                    </div>
                    {enovia.state.alertState ? <Alert message={enovia.state.alertMsg}/> : null}
                    <div className="inputFilter">
                        <br />
                        <div className="axis">
                            <input
                                ref={test}
                                type="text"
                                htmlFor="enterInput"
                                id="enterInput"
                                className="enterInput axisX"
                                name="enterInput"
                                placeholder="Введите ось X"
                                value={axisX}
                                onChange={e => setAxisX(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="axis">
                            <input
                                type="text"
                                htmlFor="enterInput"
                                id="enterInput"
                                className="enterInput axisY"
                                name="enterInput"
                                placeholder="Введите ось Y"
                                value={axisY}
                                onChange={e => setAxisY(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart-view">
                {enovia.state.chartType === CHART ?
                    <Chart element={element} /> : null}
            </div>
        </div>
    )
}

export default ChartTypes