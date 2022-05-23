import React /*Component*/ from 'react';
import Button from '../components/Formbutton';

function SideBar() {
  return (
    <div className="bg-c-black pt-32 px-6 pb-10">
      {/* nft title */}
      <div className="">
        <div className="flex">
          <h3 className="text-c-white text-3xl">Spark Twinkle</h3>
          <button className="flex">
            <p>35</p>
          </button>
        </div>
        <p>
          Minimun bid <span>15 ALGO</span>
        </p>
      </div>
      {/* description */}

      <div className="">
        <p className="text-c-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          aspernatur voluptatum quidem, non sequi ipsum, ad eos architecto
          pariatur porro rerum debitis dignissimos quo saepe sapiente ipsam
          incidunt nostrum illum.
        </p>
        <p className="text-c-white mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          aspernatur voluptatum quidem, non sequi ipsum, ad eos architecto
          pariatur porro rerum debitis dignissimos quo saepe sapiente ipsam
          incidunt nostrum illum.
        </p>
      </div>
      {/* multicolored line */}

      <div className="flex">
        <div className="text-c-white flex justify-between mt-4 w-full">
          <p>Minimum Bid</p>
          <p>15 ALGO</p>
        </div>
        <div className="">
          <p>Available until</p>
          <p>2:20:16</p>
        </div>
      </div>

      <Button buttonTitle={'Place a Bid'} />
    </div>
  );
}

export default SideBar;
