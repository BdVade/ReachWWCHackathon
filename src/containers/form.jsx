import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Formbutton';

function Form() {
  return (
    <div className=" bg-c-black  py-4  border-4 border-c-blue shadow w-1/3 my-auto px-9">
      <p style={{ color: '#fff' }} className="mt-5 mb-5 text-white text-center">
        Get started with auctions!
      </p>
      <FormInput
        className="mt-4"
        placeholder="enter your full name"
        label="Fullname"
      />

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

      <FormInput
        className="mt-4"
        placeholder="enter your email address"
        label="Confirm Password"
      />

      <Button buttonTitle={'Create Account'} />
    </div>
  );
}

export default Form;
