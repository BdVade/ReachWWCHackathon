import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import CustomCard from '../components/CustomCard';

const Explore = () => {
  return (
    <div className="bg-c-black h-fit">
      <NavBar />
      <div className="grid grid-cols-12">
        <FilterWrapper className="h-screen text-c-white col-span-3">
          {/* <CheckboxFilter /> */}
          <div className="item_filter_group">
            <h4> Select Categories </h4>
            <div className="de_form"></div>
            {/* Map filters */}
            <div className="de_checkbox" key={'index'}>
              <input
                id={'test2'}
                name={'test2'}
                type="checkbox"
                // value={'item.value'}
                // onChange={handleCategory}
              />
              <label htmlFor={'test2'}> {'Art'} </label>
            </div>
          </div>
          <div className="item_filter_group">
            <h4> Status </h4>
            <div className="de_form"></div>
            {/* Map filters */}
            <div className="de_checkbox" key={'index'}>
              <input
                id={'test'}
                name={'test'}
                type="checkbox"
                // value={'item.value'}
                // onChange={handleCategory}
              />
              <label htmlFor={'test'}> {'Art'} </label>
            </div>
          </div>
          <div className="item_filter_group">
            <h4> Items type </h4>
            <div className="de_form"></div>
            {/* Map filters */}
            <div className="de_checkbox" key={'index'}>
              <input
                id={'test3'}
                name={'test3'}
                type="checkbox"
                value={'item.value'}
                // onChange={handleCategory}
              />
              <label htmlFor={'test3'}> {'Art'} </label>
            </div>
          </div>
          <div className="item_filter_group">
            <h4> Collections </h4>
            <div className="de_form"></div>
            {/* Map filters */}
            <div className="de_checkbox" key={'index'}>
              <input
                id={'test4'}
                name={'test4'}
                type="checkbox"
                value={'item.value'}
                // onChange={handleCategory}
              />
              <label htmlFor={'test4'}> {'Art'} </label>
            </div>
          </div>
        </FilterWrapper>
        <ExploreWrapper className="flex flex-wrap text-c-white col-span-9 justify-center">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </ExploreWrapper>
      </div>
    </div>
  );
};

export default Explore;

const ExploreWrapper = styled.div`
  font-size: 14px;
  padding-top: 120px;
`;
const FilterWrapper = styled.div`
  h4 {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: bold;
  }
  label {
    ::before {
      position: absolute;
      content: '';
      display: inline-block;
      font-family: 'FontAwesome';
      margin-right: 10px;
      border: 2px solid #fff;
      width: 16px;
      height: 16px;
      margin-top: 5px;
      left: 0;
      font-size: 11px;
      padding: 1px 3px 0;
      line-height: 15px;
      border-radius: 4px;
    }
  }
  label > input[type='checkbox']:checked {
    ::before {
      content: 'ï€Œ';
      color: #fff;
      border: transparent;
      background: #8364e2;
    }
  }
  padding-top: 150px;
  .item_filter_group {
    border: 1px solid #fff;
    margin: 0 auto 25px;
    padding: 30px;
    border-radius: 12px;
    width: 250px;
  }

  .item_filter_group .de_checkbox {
    position: relative;
    display: block;
    padding-left: 25px;
    input[type='checkbox'] {
      display: none;
      -webkit-appearance: none;
      appearance: none;
      border: none;
      outline: none;
    }
    input[type='checkbox']:checked + label {
      border: none;
    }
  }

  .item_filter_group .de_form {
    label > input[type='checkbox'] + *::before {
      position: absolute;
      content: '';
      display: inline-block;
      font-family: 'FontAwesome';
      margin-right: 10px;
      border: 2px solid rgba(0, 0, 0, 0.2);
      width: 16px;
      height: 16px;
      margin-top: 5px;
      left: 0;
      font-size: 11px;
      padding: 1px 3px 0;
      line-height: 15px;
      border-radius: 4px;
    }
    label > input[type='checkbox']:checked + *::before {
      content: 'ï€Œ';
      color: #fff;
      border: transparent;
      background: #8364e2;
    }
  }
`;
