import React, { Fragment, useReducer, useState, useContext } from 'react'
import Reducer from '../../Reducer/Reducer'
import { FETCH_URL, DATA } from '../../Constants/Constants'
import { parseCSV } from '../../Utils/Utils'
import Context from '../../Context/Context'

const InputEnter = () => {
    const enovia = useContext(Context)
    const [url, setUrl] = useState('')

    const test 
    console.log("state is ", state)

    return (
        <Fragment>
            <input 
                type="text"
                htmlFor="enterInput"
                id="enterInput"
                className="enterInput"
                name="enterInput"
                placeholder="Введите URL-адрес файла"
                value={url}
                onChange={event => setUrl(event.target.value)} 
            />
            <button
                className="btn btn-search"
                onClick={() => parseURL()}
                >
                <img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" />
            </button>
        </Fragment>
    )
}

export default InputEnter