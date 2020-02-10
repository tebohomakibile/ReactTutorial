import React, {Component} from 'react'

class Counter extends Component{

    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        },
        () => {
            console.log('Count value', this.state.count);
        }
        );
        
    }

    incrementFive(){
        this.setState({
            count: this.state.count + 5
        },
        () => {
            console.log('Count value', this.state.count);
        }
        );
    }

    render(){
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>

                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }

}

export default Counter