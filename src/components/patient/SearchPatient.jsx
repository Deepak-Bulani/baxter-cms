import React, {useState} from 'react';
import Input from 'baxterAtoms/Input';
import Option from 'baxterAtoms/Option';
import Button from 'baxterAtoms/Button';
import {PATIENT_ADM} from '../../constants/mockData';

const SearchPatient = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <div className="grid  justify-start  grid-cols-1 sm:grid-cols-6 gap-2">
        <Input label="First Name" type="text" name="First_Name" disabled={false} required={true} />
        <Input label="Last Name" type="text" name="Last_Name" disabled={false} required={false} />
      </div>
      <div className="grid  justify-start  grid-cols-1 sm:grid-cols-6 gap-1 mt-2">
        <Option
          label="Attending Physician"
          labelPosition="top"
          items={PATIENT_ADM.attending_Physician}
          value={selectedValue}
          name="optionSelect"
          onChange={handleChange}
          required
        />
        <Option
          label="Attending Physician"
          labelPosition="top"
          items={PATIENT_ADM.status}
          value={selectedValue}
          name="optionSelect"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid  justify-evenly  grid-cols-1 sm:grid-cols-2 gap-1 mt-2">
        <Button
          text="Clear"
          className="h-[24px] w-[90px] font-bold bg-gradient-to-r from-gray-100 to-gray-200 text-black-1000 cursor-pointer border border-gray-300 text-xs font-sans px-1 bg-repeat-x rounded flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-400"
        />
        <Button
          text="Search"
          className="h-[24px] w-[90px] font-bold bg-gradient-to-r from-gray-100 to-gray-200 text-black-1000 cursor-pointer border border-gray-300 text-xs font-sans px-1 bg-repeat-x rounded flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-400"
        />
      </div>
    </div>
  );
};

export default SearchPatient;
