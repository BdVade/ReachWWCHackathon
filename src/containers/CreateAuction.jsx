import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Formbutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from 'react-datetime-picker';
import { connectToContract } from '../redux/actions/action';
import { useDispatch } from 'react-redux';
function CreateAuction({ closemodal }) {
  const [value, onChange] = useState(new Date());
  const [title, setTitle] = useState('');
  const [floor, setFloor] = useState('');
  //const [end, setEnd] = useState('');
  const [id, setId] = useState();
  const dispatch = useDispatch();
  return (
    <div className=" bg-white backdrop-blur-sm shadow-lg absolute top-0 w-full z-30 flex justify-center h-full">
      <div className="bg-c-black  py-9  border-c-blue border-4 shadow-md w-1/3 my-auto px-9 ">
        <div
          onClick={closemodal}
          className="flex justify-end cursor-pointer  text-c-white "
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <p
          style={{ color: '#fff' }}
          className="mt-5 mb-5 text-white text-center text-xl"
        >
          Create your auction!
        </p>

        <FormInput
          value={title}
          onChangeHandler={setTitle}
          className="mt-6"
          placeholder="Enter auction title"
        />

        <FormInput
          value={floor}
          onChangeHandler={setFloor}
          className="mt-6"
          placeholder="What's your floor price?"
        />
        <FormInput
          value={id}
          onChangeHandler={setId}
          className="mt-6"
          placeholder="Auction Item id"
        />
        <p className="text-c-white mt-5">Start time</p>
        <DateTimePicker
          className="mt-2 bg-c-white h-10 w-full"
          onChange={onChange}
          value={value}
        />

        <Button
          handleClick={() => {
            const auction = {
              name: title,
              biddingFloor: floor,
              nftId: id,
              //deadline: end,
            };

            dispatch(connectToContract(auction));
          }}
          buttonTitle={'Launch Auction'}
        />
      </div>
    </div>
  );
}

export default CreateAuction;
