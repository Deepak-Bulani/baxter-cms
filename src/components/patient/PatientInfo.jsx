import  {useState} from 'react';
import React from 'react';
import Input from '../Input';

const PatientInfo = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <Input
        label="Username"
        labelPosition="top"
        type="text"
        name="username"
        placeholder="Enter your username"
      />
    </div>
  );
};

export default PatientInfo;
