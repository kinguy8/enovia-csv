import React, { useContext } from 'react'
import ContentItem from '../ContentItem/ContentItem'
import Context from '../../Context/Context'
import { NEXT_PAGE } from '../../Constants/Constants'
import Button from '../Button/Button'

const ContentPreview = () => {
    const enovia = useContext(Context)
    return (
        <div className="table-view">
                    <table className="content-table">
                        <thead>
                        <tr>
                            {enovia.state.data.header.map((content) =>{
                                return (
                                    <th className="column1">{content}</th>
                                )
                            })}
                            </tr>
                        </thead>
                    
                    <tbody>
                        {enovia.state.data.content.map((value, idx) => {
                            return (
                                <ContentItem 
                                content={value}
                                key={idx} />
                            )
                        })}
                    </tbody>
                    </table>
        </div>
    )
}

export default ContentPreview