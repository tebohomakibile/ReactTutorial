import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            message: '',
            topic: 'React'
        }
    }

    inputChangeHandler = (event) => {
        this.setState({
            userName: event.target.value
        }, () => {
            console.log('Current State Input: ',this.state.userName)
        })
        
    }

    textAreaChangeHandler = (event) => {
        this.setState({
            message: event.target.value,
        }, () => {
            console.log('Current State Text Area: ',this.state.message)
        })
        
    }

    listChangeHandler = event => {
        this.setState({
            topic: event.target.value
        },
        () => {
            console.log('Current State List: ',this.state.topic)
        })
        
    }

    render() {
        return (
            <form>
                <div>
                    <label>Username: </label>
                    <input type="text" value={this.state.userName} onChange={this.inputChangeHandler} />
                </div>

                <div>
                    <label>Message: </label>
                    <textarea value={this.state.message} onChange={this.textAreaChangeHandler}></textarea>
                </div>
                
                <div>
                    <label>Topic: </label>
                    <select value={this.state.topic} onChange = {this.listChangeHandler}>
                        <option>React</option>
                        <option>Angular</option>
                        <option>Vue</option>
                    </select>
                </div>

                <button onClick={() => alert(`${this.state.userName} and ${this.state.message} and ${this.state.topic}`)}>Submit</button>
            </form>
        )
    }
}

export default Form
