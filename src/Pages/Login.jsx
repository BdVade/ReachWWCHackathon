import React from 'react';
import Loginform from '../containers/loginform';
function Login() {
  return (
    <div
      style={{ height: '100vh' }}
      className="text-2xl w-full font-bold bg-hero-pattern  underline flex justify-center"
    >
      <Loginform />
    </div>
  );
}

export default Login;
