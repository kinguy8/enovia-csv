import React, { Fragment } from 'react'

const ContentItem = ({ content }) => {
    const values = Object.values(content)
    return (
        <tr>
            {values.map((value) => {
                return (
                    <td className="column1">{value}</td>
                )
            })}
        </tr>
    )
}

export default ContentItem