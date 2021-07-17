import React, { useState } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // Component level state
  const [formValues, setFormValues] = useState({
    username:"",
    password: ""
  })

  // Change handler
  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }


  // Handle submit function




  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form>
          <input 
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formValues.username}
          onChange={handleChange}
          />
          <input 
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={formValues.password}
          onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"