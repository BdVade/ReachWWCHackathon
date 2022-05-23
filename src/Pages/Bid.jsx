import React from 'react';
import NavBar from '../components/NavBar';
import BidSummary from '../containers/BidSummary';
import SideBar from '../containers/BidSideBar';

function MakeBid() {
  return (
    <div className="h-full ">
      <NavBar />

      <div className="flex ">
        <div className="w-3/4 pt-32 bg-bid-pattern bg-cover  flex justify-center items-center">
          <BidSummary />
        </div>
        <div className="w-1/4">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default MakeBid;
