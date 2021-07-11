import React, { useContext } from 'react'
import ContentItem from '../ContentItem/ContentItem'
import Context from '../../Context/Context'
import { NEXT_PAGE } from '../../Constants/Constants'

const ContentPreview = () => {
    const enovia = useContext(Context)

    const openNextPage = () => {
        console.log("isNextOpen")
        enovia.setData(NEXT_PAGE, enovia.state)
        
    }
    return (
        <div className="content">
        <div className="container-table100">
            <div className="wrap-table100">
                <div className="table100">
                    <table>
                        <thead>
                        <tr className="table100-head">
                            {enovia.state.data.header.map((content) =>{
                                return (
                                    <th className="column1">{content}</th>
                                )
                            })}
                            </tr>
                        </thead>
                    </table>
                    <tbody>
                        {enovia.state.data.content.map((value, idx) => {
                            return (
                                <ContentItem 
                                content={value}
                                key={idx} />
                            )
                        })}
                    </tbody>
                </div>
            </div>
        </div>
        <button 
        className="btn btn-primary next-view"
        onClick={() => openNextPage()}>Далее</button>
        </div>
    )
}

export default ContentPreview