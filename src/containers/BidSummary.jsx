import React from 'react';
import FormInput from '../components/FormInput';

function BidSummary() {
  return (
    <div className="bg-c-input rounded-md w-96 px-5 py-6">
      <p className="text-center text-c-white text-3xl font-bold">Place a Bid</p>
      <div className="mt-3">
        <div className="flex justify-between text-c-white">
          <p>You must bid at least </p>
          <span>15 ALGO</span>
        </div>
        <br />

        <hr className="border-1 border-c-white" />

        <div className=" mt-5 text-c-white">
          <div className="flex justify-between ">
            <span className="">Your balance</span>
            <span>69,000 ALGO</span>
          </div>
          <div className="flex justify-between">
            <span className="">Service fee</span>
            <span>69,000 ALGO</span>
          </div>
          <div className="flex justify-between">
            <span className="">Minimum bid Amount</span>
            <span>15.02 ALGO</span>
          </div>
        </div>

        <div className="flex items-center">
          <FormInput />
          <button className="bg-c-blue h-11 px-2 rounded-sm mt-5 text-c-white">
            Place bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default BidSummary;
