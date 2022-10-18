import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import LoginForm from './components/login/LoginForm';


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }


  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("Details do not match!");
      setError("Details do not match!")
  }}

  const Logout = () => {
    setUser({name: "", email: ""})
  }



  return (
    <div className="App">
      {(user.email != "") ? (
        <Router>
          <MainContainer logout={Logout} className="mainContainer"/>
          <footer>
                    <div class="wrapper">
                        <div id="footer-info">
                            <p>Copyright 2020 RedFig. All rights reserved by two idiots.</p>
                            <p><a href="#">Terms of Service</a> I <a href="#">Privacy</a></p>
                        </div>
                        <div id="footer-links">
                            <ul>
                                <li><h5>RedFig</h5></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">GoodFood</a></li>
                                <li><a href="#">A Food Blog</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                            <ul>
                                <li><h5>Company</h5></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Meet The Team</a></li>
                                <li><a href="#">What We Do</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                            <ul>
                                <li><h5>Our Partners</h5></li>
                                <li><a href="#">About Them</a></li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                </footer>
        </Router>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}



//   return (
//     <div className="App">
//       <Router>
//         <MainContainer/>
//       </Router>
//       <footer className='footer'>.</footer>
//     </div>
//   );
// }

//CHecking a git issue

export default App;
