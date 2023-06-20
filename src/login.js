import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      username: username,
      password: password,
    };

    fetch('https://betaapi.doctordiary.in/api/v1/Authentication/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('userData', JSON.stringify(data));
        console.log(data);
      })
      
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="button" onClick={handleTogglePassword}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;





// const handleSubmit = (e) => {
//   e.preventDefault();
//   const requestData = {
//     username: username,
//     password: password,
//     os: '',
//     App_version: '',
//   };

//   fetch('https://betaapi.doctordiary.in/api/v1/Authentication/Login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(requestData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Store the API response data in the local storage
//       localStorage.setItem('userData', JSON.stringify(data));
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// };

