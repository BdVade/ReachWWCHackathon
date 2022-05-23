import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Formbutton';
function Loginform() {
  return (
    <div className="bg-c-black  py-4 border-c-blue border-4 shadow-md w-1/3 my-auto px-9">
      <p style={{ color: '#fff' }} className="mt-5 mb-5 text-white text-center">
        Welcome back !
      </p>

      <FormInput
        className="mt-4"
        placeholder="enter your email address"
        label="Email"
      />

      <FormInput
        className="mt-4"
        placeholder="enter your password"
        label="Password"
      />

      <Button buttonTitle={'Login'} />
    </div>
  );
}

export default Loginform;
