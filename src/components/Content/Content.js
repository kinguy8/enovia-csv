import React, { useState } from 'react'
import InputEnter from '../InputEnter/InputEnter'
import ContentPreview from '../ContentPreview/ContentPreview'
import ChartTypes from '../ChartTypes/ChartTypes'
import Context from '../../Context/Context'
import { useEnoviaHook } from '../Hooks/Hook'
import Button from '../Button/Button'
import { NEXT_PAGE } from '../../Constants/Constants'

const Content = () => {
    const { state, setState, setData } = useEnoviaHook()

    console.log("new state is ", state)

    const openNextPage = () => {
        console.log("isNextOpen")
        setData(NEXT_PAGE, state)
    }
    return (
        <Context.Provider value={{ state, setState, setData }}>
            {!state.isNextOpen ? (
                <div className="container">
                    <div className="controls">
                        <InputEnter />
                    </div>
                    {state.url.length ? <ContentPreview /> : null}
                    {state.url.length ? <Button buttonValue={"Далее"} classValue={"btn btn-primary"} sampleFunction={openNextPage}/> : null}
                </div>
            ) : <ChartTypes />}

        </Context.Provider>
    )
}

export default Content