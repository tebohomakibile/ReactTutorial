import React from 'react';


// const Greet = props => {

//     return <h1>Hello {props.name} a.k.a {props.heroName}</h1>

// }


// Breakdown the props in React
// const Greet = ({name, heroName}) => {
//     return <div>
//     <h1>Hello {name} aka {heroName}</h1>
//     </div>
// }

// Breakdown the props in React second method
const Greet = props => {
    const {name, heroName} = props

    return <div>
    <h1>Hello {name} aka {heroName}</h1>
    </div>
}

export default Greet
