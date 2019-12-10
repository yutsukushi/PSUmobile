import React, { Component } from "react";
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
                    <img src={require("../images/LionPATH w Icon-PRIMARY Use-2c(287+285)-no acronym.jpg")} alt="lionpath logo"/>
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
                    <div className="inputField">
                        {/* <span className="username">User ID</span> */}
                        <input 
                        className="form-control"
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;