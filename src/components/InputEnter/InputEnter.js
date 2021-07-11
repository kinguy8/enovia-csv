import React, { Fragment, useState, useContext } from 'react'
import { FETCH_URL } from '../../Constants/Constants'
import { parseCSV } from '../../Utils/Utils'
import Context from '../../Context/Context'

const InputEnter = () => {
    const enovia = useContext(Context)
    const [url, setUrl] = useState('')

    const parseURL = () =>{
        const { header, content } = parseCSV()
        const data = {
            url,
            header,
            content
        }
        enovia.setData(FETCH_URL, data)
    }
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
                <img className="search-img" src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" />
            </button>
        </Fragment>
    )
}

export default InputEnter