import React from 'react'

const Button = ({buttonValue, classValue, sampleFunction}) => {
    return (
        <button 
        className={classValue}
        onClick={() => sampleFunction()}>
        {buttonValue}
        </button>
    )
}
export default Button