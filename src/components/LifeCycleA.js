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
    
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Makibile'
        })
    }

    render() {
        console.log("Render");
        return (
            <div>
                <p>Life cycle A works</p>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
