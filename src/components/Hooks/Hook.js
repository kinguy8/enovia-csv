import React, { useCallback, useEffect, useReducer } from 'react'
import Reducer from '../../Reducer/Reducer'
import { FETCH_URL, DATA } from '../../Constants/Constants'


export const useEnoviaHook = () => {
    const [state, setState] = useReducer(Reducer, DATA)

    const setDate = useCallback(data => {
        setTimeout(() => {
            setState({
                type: FETCH_URL,
                payload: data,
            })
        })
    }, [])
}