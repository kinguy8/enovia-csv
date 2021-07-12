import React, {useEffect, useContext} from 'react'
import Context from '../../Context/Context'
import { CLOSE_ALERT } from '../../Constants/Constants'

const Alert = ({message}) => {
    const enovia = useContext(Context)
    useEffect(() =>{
        console.log("useEffect")
        setTimeout(() =>{ 
            enovia.setData(CLOSE_ALERT, enovia.state)
            console.log("close")
        },3000)
    },[])
    return (
        <div className="alert">
            <div className="alert-msg">
                <div className="alert-text">
                    <p>
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Alert