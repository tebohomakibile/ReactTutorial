import React from 'react'

const childName = 'Child'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler(childName)}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
