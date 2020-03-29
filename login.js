import React, { Component } from 'react';
import fire from './config/fire';

import Parent from './Sign.js'
import { Link } from "react-router-dom"; 

import './login/fonts/material-icon/css/material-design-iconic-font.min.css'
import './login/css/style.css'
import './LoginCss.css'


// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    console.log("@login")
    // e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      // api call 
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    console.log("@signup")
    // e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{
      console.log(u)
      // api-call post method
    })
    .catch((error) => {
        console.log(error);  
      })
  }
  
  // <a href="#" onClick={this.handleClick} className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"></a>

  render() {
    return (
      // <div>
      
      /* <Card style={{ maxWidth: "200%"}}>
      <Row>
      <Col>    
 
      <CardImg src={require("./images/3.jpg")} style={{width:"102%",border:""}} />
    



</Col>
  <Col style={{maxWidth:"30%"}}>   
      <br></br>
      <CardImg src={require("./images/Logo.jpeg")}  style={{width:"100%"}}/>
  <br></br><br></br>
 
 <Card style={{padding:"10%",height:"80%"}}>

 <fieldset style={{height : "520px" , border:"2px solid #005ce6",padding:"8%",borderRadius: "8px",backgroundColor:"white"}}>
      <center><legend>

      <Parent  props={{"login":this.login,"signup":this.signup}} /> */
 
 /* <img src={require("./images/face.png")} align={"middle"} style={{width:"20%"}}/> */
 /* <br></br><br></br>
 
 </legend></center>

 </fieldset> */

/* <fieldset style={{border:"2px solid #005ce6",padding:"8%",borderRadius: "8px",backgroundColor:"white"}}>
      <center><legend> */

       /* <Parent /> */
 
 /* <img src={require("./images/face.png")} align={"middle"} style={{width:"20%"}}/>
 <br></br><br></br>
 
 </legend></center>

  <form >
 
  <div className="form-group"> */
   /*<label htmlFor="exampleInputEmail1">Email address</label>*/
   /* <center>
  <input value={this.state.email} onChange={this.handleChange} style={{width:"80%",borderWidth:"0 0 1px",borderColor:"#005ce6",align:"middle",outline:"0",borderRadius:"0"}} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email*" /> 
<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</center>
</div>
   <div className="form-group"> */
    /*<label htmlFor="exampleInputPassword1">Password</label>*/
  /* <center><input value={this.state.password} onChange={this.handleChange} style={{width:"80%",borderWidth:"0 0 1px",borderColor:"#005ce6",align:"middle",outline:"0",borderRadius:"0"}} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password*" /></center>
  </div>
  <center><button type="submit" style={{width:"80%",borderRadius:"30px",backgroundColor:"#005ce6",border:"1px #005ce6",color:"white",fontSize:"10px"}} onClick={this.login} className="btn btn-primary">LOGIN</button></center><br></br>
  <p style={{textIndent:"35px"}}>Need new account?</p>
  <center><button onClick={this.signup} style={{width:"80%",borderRadius:"30px",backgroundColor:"#005ce6",color:"white",border:"1px #005ce6",fontSize:"10px"}} onClick={this.signup} className="btn btn-success">SIGNUP</button></center>
  
  </form>
  </fieldset>  */
/* </Card>
</Col>
</Row>  
</Card>
</div> */
/*margin-top: 10px;
margin-left:90px;*/ 


<div style = {{ backgroundImage: "linear-gradient(to left, #74ebd5, #9face6)",width : "100%" , marginLeft : "0" , paddingLeft : "0"}} className = "container">

<div style = {{ height: "100vh",
                        width: "45%",
                        backgroundColor : "#eeeeee",
                       float : "left" }}> >

<MDBContainer>

      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
        style = {{boxShadow : "none"}}
      >

        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={require("./login/login1.png")}
                alt="First slide"
                style={{height : "440px",
                        width :  "400px",
                        maxWidth: "90%",
                        maxHeight: "85%",
                        marginTop: "40px",
                        paddingLeft: "65px",
                       paddingBottom: "10px" }}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={require("./login/login2.png")}
                alt="Second slide"
                style={{height : "440px",
                        width :  "400px",
                        maxWidth: "90%",
                        maxHeight: "85%",
                        marginTop: "40px",
                        paddingLeft: "55px",
                       paddingBottom: "10px" }}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={require("./login/login3.png")}
                alt="Third slide"
                style={{height : "350px",
                        width :  "400px",
                        maxWidth: "90%",
                        maxHeight: "65%",
                        marginTop: "40px",
                        paddingLeft: "85px",
                       paddingBottom: "10px"}}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
        
      </MDBCarousel>
      
      

    </MDBContainer>

    
    <p style = {{
                  fontFamily : "calibri",
                  width :"70vh",
                  // maxWidth : "35%",
                   color: "#424242",
                  fontSize: "20px",
                  paddingLeft: "2%",
                  // paddingRight: "5px",
                  position: "fixed",
                  bottom: "0px",
                  textAlign: "center"}}>Loren Ipsum is simply dummy text of the printing and typesetting industry</p>
                  

        </div>                  
                    
                    <div className = "rest">
                    <img className = "nimble" src = {require("./login/nimble.png")} />
                    <h4 className = "nimblefont">Loren Ipsum is simply dummy text of the printing and type setting industry</h4>
                    
   
                    <form action="" id="signup-form" className ="signup-form">
   
                         <div className ="form-group">
                               <input style = {{width: "100%"}}type="email" className ="form-input" name="email" id="email" placeholder="Your Email"/>
                           </div>
                           <div className ="form-group">
                               <input style = {{width: "100%"}} type="password" className ="form-input" name="password" id="password" placeholder="Password"/>
                               <span toggle="#password" className ="zmdi zmdi-eye field-icon toggle-password"></span>
                           </div>
                          
                          <div className ="form-group">
                               <input type="checkbox" name="agree-term" id="agree-term" className ="agree-term" />
                               <label for="agree-term" className ="label-agree-term"><span><span></span></span>Remember Me </label>
                           </div>
                           {/* <!-- <a href="#" class="term-service">Terms of service</a> --> */}
                           <div className ="form-group">
                               <input type="submit" name="LOGIN" id="submit" className ="form-button" value="Login"/>
                           </div>
   
                           <p style = {{fontSize: "12px" , textAlign: "center"}}>
                           Not a member yet ? <a href="file:///C:\Users\Lenovo\Desktop\Solytics-master_\signup\index.html" className ="loginhere-link">Signup ?</a>
                       </p>
                        {/* <!-- <br><center><button type="submit" class = "buttoni">LOGIN</button></center><br><br> --> */}
   
                    </form>
                    <p style = {{marginBottom : 0 , paddingTop : "15px" , textAlign: "center" , color : "#757575" , fontSize : "14px"}}>Powered by AI</p>
                    <b><p style={{textAlign: "center", color : "#424242" , fontSize : "20px"}}>Solytics Partners</p></b>
                </div>

            
            
                </div>
      

    
    );
  }
}

export default Login;