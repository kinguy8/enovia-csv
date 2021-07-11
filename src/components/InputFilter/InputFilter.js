import React, { Fragment, useState } from 'react'

const InputFilter = ({ setFilter }) =>{
    const [axisX, setAxisX] = useState("")
    const [axisY, setAxisY] = useState("")

    const setAxisXvalue = (value) =>{
        setAxisX(value)
        setFilter(axisX, axisY)
    }
    
    const setAxisYvalue = (value) =>{
        setAxisY(value)
        setFilter(axisX, axisY)
    }

    return (
        <Fragment>
            <br/>
            <input 
                type="text"
                htmlFor="enterInput"
                id="enterInput"
                className="enterInput"
                name="enterInput"
                placeholder="Введите ось X"
                value={axisX}
                onChange={e => setAxisXvalue(e.target.value)}
            />
            <br />
            <input 
                type="text"
                htmlFor="enterInput"
                id="enterInput"
                className="enterInput"
                name="enterInput"
                placeholder="Введите ось Y"
                value={axisY}
                onChange={e => setAxisYvalue(e.target.value)}
            />
        </Fragment>
    )
}

export default InputFilter