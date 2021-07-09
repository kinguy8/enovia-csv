import React, {useState} from 'react'
import InputEnter from '../InputEnter/InputEnter'
import ContentPreview from '../ContentPreview/ContentPreview'
import Context from '../../Context/Context'
import { useEnoviaHook } from '../Hooks/Hook'

const Content = () => {
    const { state, setState, setDate } = useEnoviaHook()

    return (
        <Context.Provider value={{ state, setState, setDate }}>
        <div className="container">
            <div className="controls">
            <InputEnter  />
            </div>
            <ContentPreview />
        </div>
        </Context.Provider>
    )
}

export default Content