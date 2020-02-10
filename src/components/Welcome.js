import React, { Component } from 'react';

class Welcome extends Component{

    render(){
        // return React.createElement('h1', null, [this.placeOfBirth,this.displayText()]);
        const {name, heroName} = this.props
        return (
            <div>
                <h1>Welcome {name} a.k.a {heroName}</h1>
            </div>
        );
    }
}

export default Welcome
