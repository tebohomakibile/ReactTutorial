import React, {Component} from 'react';

class ClassClick extends Component{

    clickHandler(){
        console.log('Click recorded form a class component');
    }

    render(){
        return (
            <button onClick={this.clickHandler}>Click Me!!!!</button>
        )
    }

}

export default ClassClick