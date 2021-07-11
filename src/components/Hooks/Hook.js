import React, { useCallback, useEffect, useReducer } from 'react'
import Reducer from '../../Reducer/Reducer'
import { FETCH_URL, DATA } from '../../Constants/Constants'


export const useEnoviaHook = () => {
    const [state, setState] = useReducer(Reducer, DATA)

    const setData = useCallback((type, data) => {
        setTimeout(() => {
            setState({
                type: type,
                payload: data,
            })
        })
    }, [])
    return { state, setState, setData }
}