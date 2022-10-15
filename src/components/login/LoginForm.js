import React, { useState } from 'react'

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = (event) => {
        event.preventDefault();
        Login(details)
    }




    
  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {/* ERROR! */}
            <div className="form-group">
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" id="name" onChange={event => setDetails({...details, name: event.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <label htmlFor='email'>Email:</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" id="password"/>
            </div>

        </div>
        <input type="submit" value="LOGIN"/>
    </form>
  )
}

export default LoginForm