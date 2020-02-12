import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Teboho'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Makibile'
            })
        }, 2000)
    }
    
    render() {
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
