import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Teboho'
        }

        console.log('Contructor');
    }
    
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    render() {
        console.log("Render");
        return (
            <div>
                Life cycle A works
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
