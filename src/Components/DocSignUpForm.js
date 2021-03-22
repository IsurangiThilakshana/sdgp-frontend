import React, { Component } from 'react'
import './style.css';

class DocSignUpForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',
             newPassWord:'',
             reEnterPassWord : ''
        }
    }
    handleUsernameChange = (event) =>{
        this.setState({
            userName : event.target.value
        })
    }

    handleNewPassWordChange = (event) =>{
        this.setState({
            newPassWord : event.target.value
        })

    }

    
    handleConfirmPassWordChange = (event) =>{
        this.setState({
            confirmPassWord : event.target.value
        })
    }
    
    
    handleSignUp = (event) =>{

    }
    
    render() {
        return (
            <form onSubmit={this.handleSignUp}>
                {/* <h1>Holo Lab</h1> */}
                <h2>Sign Up to a New Doctor Account</h2>
                <div>
                <label for="username"> USER NAME:</label><br/>
			   <input type="text" value={this.state.userName} name="username" placeholder="Enter Doctor's User Name"
                onChange={this.handleUsernameChange}/><br/>

               <label for="newpassword">PASSWORD:</label><br/>
			   <input type="text" value={this.state.passWord} name="newpassword" placeholder="Enter New Password"
                onChange={this.handleNewPassWordChange}/><br/>

               <label for="confirmpassword">RE-ENTER PASSWORD:</label><br/>
			   <input type="text" value={this.state.passWord} name="confirmpassword" placeholder="Confirm Password"
                onChange={this.handleConfirmPassWordChange}/><br/>

                    <button type="signup">SignUp</button>
                </div>
            </form>
        )
    }
}

export default DocSignUpForm