import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    

    render() {
        // Approach 1
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Teboho</div>
        // }
        // else{
        //     return <div>Welcome Guest</div>
        // }

        // Approach 2

        // let welcomeMessage

        // if(this.state.isLoggedIn){
        //     welcomeMessage = 'Welcome Teboho'
        // }
        // else{
        //     welcomeMessage = 'Welcome Guest'
        // }

        // return <div>{welcomeMessage}</div>

         // Approach 3

        // return(
        //     this.state.isLoggedIn ? <div>Welcome Teboho</div> : <div>Welcome Guest</div>
        // )

        // Approach 4

        return this.state.isLoggedIn && <div>Welcome Teboho</div>
    
    }
}

export default UserGreeting
