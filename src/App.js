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
  }

  const Logout = () => {
    console.log("Logout");
  }



  return (
    <div className="App">
      {(user.email = "") ? (
        <Router>
          <MainContainer />
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
