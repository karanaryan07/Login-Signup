import React, { Component } from 'react';
import fire from './config/fire';
import { Link } from "react-router-dom"; 
import './signup/css/style.css'
import './signup/fonts/material-icon/css/material-design-iconic-font.min.css'


class SignUp extends Component{


    render()
    {
        return(
            <div className ="bg-img">
                {/* <img
                className="d-block w-100"
                src={require("./signup/images/signup-bg.jpg")}
                alt="First slide"
                
              /> */}
        <section className ="signup">
            {/* <!-- <img src="images/signup-bg.jpg" alt=""> --> */}
            <div className ="container">
                <div className ="signup-content">
                    <form method="POST" id="signup-form" className ="signup-form">
                        <h2 className ="form-title">Create account</h2>
                        <div className ="form-group">
                            <input type="text" className ="form-input" name="name" id="name" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" style = {{width: "100%"}} className="form-input" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" style = {{width: "100%"}} className="form-input" name="password" id="password" placeholder="Password"/>
                            <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                        <div className="form-group">
                            <input type="password" style = {{width: "100%"}} className="form-input" name="re_password" id="re_password" placeholder="Repeat your password"/>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                            <label for="agree-term" className ="label-agree-term"><span><span></span></span>Remember Me </label>
                        </div>
                        <div className ="form-group">
                            <input type="submit" name="submit" id="submit" className ="form-submit" value="Sign up"/>
                        </div>
                    </form>
                    <p className="loginhere">
                        Have already an account ? <a href="./login.js" className ="loginhere-link">Login here</a>
                    </p>
                </div>
            </div>
        </section>

    </div>

        );
    }
}

export default SignUp