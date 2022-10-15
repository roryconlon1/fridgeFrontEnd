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
          <MainContainer />
          <button onClick={Logout}>LogOut</button>
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

export default App;
