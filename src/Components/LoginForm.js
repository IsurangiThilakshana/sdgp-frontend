import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import './style.css';
// cont Login = styled.Login'
// '

class LoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',
             passWord:''
        }
    }
    handleUsernameChange = (event) =>{
        this.setState({
            userName : event.target.value
        })
    }

    handlePassWordChange = (event) =>{
        this.setState({
            passWord : event.target.value
        })

    }
    // handleLogin = (event) =>{
        
        
    // }
    
    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1>Holo Lab</h1>
                <h2>Login to account</h2>
                <div>
                <label for="username"> USER NAME:</label><br/>
			   <input type="text" value={this.state.userName} name="username" placeholder="Enter user name"
                onChange={this.handleUsernameChange}/><br/>

               <label for="password">PASSWORD:</label><br/>
			   <input type="text" value={this.state.passWord} name="password" placeholder="Enter password"
                onChange={this.handlePassWordChange}/><br/><br/>

                <div class="btncenter">
                <Link 
                to='/Doctor'
                className=''
                onClick={this.handleLogin}> 
				<button class="btn" type="Login" form="LoginForm" value="Login" onClick={this.handleLogin}>Login
                </button>
                </Link> <br/><br/>
              

	
			    </div>
                </div>
            </form>
        )
    }
}

export default LoginForm
