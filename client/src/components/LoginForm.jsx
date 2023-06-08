import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const token = response.data.token;
      // Store the token in local storage or cookies
      console.log(token);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="bg container-lg " >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group col">
          <label for="exampleInputEmail1">Email address</label>
            <input type="email" 
                  class="form-control form-control-sm  "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} />
          </div>
        <div class="form-group ">
          <label for="exampleInputPassword1">Password</label>
            <input
            type="password"
            class="form-control form-control-sm"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div class = "form-check">
          <input input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Remember Me</label>

        </div>

        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};


export default LoginForm;
