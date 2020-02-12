import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Teboho'
        }

        console.log('Contructor Child Component');
    }
    
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps Child Component')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount Child Component')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate Child Component')
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate Child Component')
        return null
    }

    componentDidUpdate(){
        console.log('componentDidUpdate Child Component')
    }

    render() {
        console.log("Render Child Component");
        return (
            <div>
                Life cycle B works
            </div>
        )
    }
}

export default LifeCycleB
