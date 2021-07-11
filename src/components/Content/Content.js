import React, { useState } from 'react'
import InputEnter from '../InputEnter/InputEnter'
import ContentPreview from '../ContentPreview/ContentPreview'
import ChartTypes from '../ChartTypes/ChartTypes'
import Context from '../../Context/Context'
import { useEnoviaHook } from '../Hooks/Hook'

const Content = () => {
    const { state, setState, setData } = useEnoviaHook()

    console.log("new state is ", state)
    return (
        <Context.Provider value={{ state, setState, setData }}>
            {!state.isNextOpen ? (
                <div className="container">
                    <div className="controls">
                        <InputEnter />
                    </div>
                    {state.url.length ? <ContentPreview /> : null}
                </div>
            ) : <ChartTypes />}

        </Context.Provider>
    )
}

export default Content