import React from 'react';
import styled from 'styled-components';

const InputField = props => {
  const validateInput = values => {
    if (values.some(f => f === '') || values[0].indexOf('@') === -1) {
      return true;
    } else {
      return false;
    }
  };

  if (props.type === 'submit') {
    return (
      <Input
        className="primaryBtn primaryBtn--big g__justify-self-center mt-4"
        type="submit"
        value={props.label}
        disabled={validateInput(props.formValues)}
      />
    );
  } else if (props.type === 'textarea') {
    return (
      <label className="inputField__label ">
        {props.label}
        <textarea
          onChange={e => props.onChangeHandler(e.target.value)}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className="inputField__field"
          rows={7}
          name={props.name}
        />
      </label>
    );
  } else {
    return (
      <div className="flex-col">
        <label
          style={{ color: '#fff', fontSize: 16 }}
          className="inputField__label text-white justify-start "
        >
          {' '}
          {props.label}
        </label>
        <Input
          onChange={e => props.onChangeHandler(e.target.value)}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className="inputField__field"
          name={props.name}
        />
      </div>
    );
  }
};

export default React.memo(InputField);

const Input = styled.input`
  width: 100%;
  padding: 8px 0 8px 36.67px;
  font-size: 17px;
  border: 2px solid #000000;
  border-radius: 5px;
  margin-right: 15px;
  margin-top: 20px;

  @media (min-width: 1024px) {
    max-width: 400px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 20px;
    margin-right: 0;
    padding: 12px 0 12px 15px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
  }
`;
