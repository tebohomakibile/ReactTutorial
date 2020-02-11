import React from 'react'
import '../css/style.css'

function Stylesheet(props) {

    let appliedStyle = props.primary ? 'header-color' : ''

    return (
        <div>
            <h1 className = {`${appliedStyle} font-xl`} >Hello</h1>
        </div>
    )
}

export default Stylesheet
