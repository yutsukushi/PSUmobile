import React, { Component } from "React";
import "./style.css";

class SignIn extends Component {
    state = {
        username: "",
        password: ""
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="psuLogo">
                    {/* lionpath logo here */}
                </div>
                <div className="loginForm">
                    {/* login form here */}
                    <div className="inputField">
                        {/* <span className="username">User ID</span> */}
                        <input 
                        className="form-control"
                        type="text"
                        placeholder="User ID"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}