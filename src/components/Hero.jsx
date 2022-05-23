import React from 'react';
import woman from '../assets/img/women-with-vr.png';
// import Reveal from 'react-awesome-reveal';
// import { keyframes } from '@emotion/react';

// const fadeInUp = keyframes`
//   0% {
//     opacity: 0;
//     -webkit-transform: translateY(40px);
//     transform: translateY(40px);
//   }
//   100% {
//     opacity: 1;
//     -webkit-transform: translateY(0);
//     transform: translateY(0);
//   }
// `;
// const inline = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
//   .d-inline{
//     display: inline-block;
//    }
// `;

const Hero = ({ create }) => (
  <div className="text-c-white h-3/4 pt-32 max-w-5xl mx-auto grid grid-cols-2 gap-2 pb-24">
    <div>
      <h3 className="text-2xl text-c-blue font-bold mb-2">ReachCoin</h3>
      <h1
        className="text-c-white text-5xl font-bold mb-5"
        style={{ lineHeight: '1.2em' }}
      >
        Create, sell or collect digital items.
      </h1>
      <p className="text-c-white text-xl mb-5" style={{ lineHeight: '1.7em' }}>
        Unit of data stored on a digital ledger, called a blockchain, that
        certifies a digital asset to be unique and therefore not interchangeable
      </p>
      <button className="text-c-black bg-c-blue hover:bg-opacity-70 font-bold py-2 px-10 rounded-full w-max">
        Explore
      </button>
      <button
        onClick={create}
        className="text-c-black bg-c-blue hover:bg-opacity-70 font-bold py-2 px-10 rounded-full w-max ml-4"
      >
        Upload Auction
      </button>
    </div>
    <img src={woman} alt="Women with VR" />
  </div>
);
export default Hero;
