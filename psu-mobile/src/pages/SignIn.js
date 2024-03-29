import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./style.css";
import "./reset.css";

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
            <div className="wrapper">
                <Container>
                    <Row>
                        <Col>
                            <div className="psuLogo">
                                <img src={require("../images/LionPATH w Icon-PRIMARY Use-2c(287+285)-no acronym.jpg")} alt="lionpath logo"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="loginForm">
                                {/* login form here */}
                                <form action="/login" method="GET">
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
                                    <div className="checkWrapper">
                                        <label className="rememberUser"> 
                                            <input type="checkbox" 
                                                name="checkbox" 
                                                value="rememberUser"/> 
                                                Remember User ID
                                        </label>
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
                                        <Link 
                                        to="/signinhelp"
                                        className="troubleSignIn">Trouble signing in?</Link>
                                    </div>
                                    <div className="buttonContainer">
                                        <Button
                                        onClick={this.handleLogInSubmit}>
                                        Sign in
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SignIn;