import React, {useState} from 'react';
import Option from '../formcomponent/Option';

const FilterPatient = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const items = [
    {value: 'all', label: 'All'},
    {value: 'pal', label: 'Dr. Pal'},
  ];
  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="mt-4 border border-[#999] border-b-5 border-b-[#6C8CB3] rounded-b-[3px] mb-5">
      <div className="bg-[#6c8cb3] min-h-[10px] leading-[25px] text-[15px] font-bold text-white p-2">
        Filter Patient
      </div>

      <div className="grid  justify-start  grid-cols-1 sm:grid-cols-4 gap-1 mt-8 m-4">
        <Option
          label="Attending Physician"
          labelPosition="top"
          items={items}
          value={selectedValue}
          name="optionSelect"
          onChange={handleChange}
          required
        />
        <Option
          label="Treatment Progress"
          labelPosition="top"
          items={items}
          value={selectedValue}
          name="optionSelect"
          onChange={handleChange}
          required
        />

        <Option
          label="Modality/Device"
          labelPosition="top"
          items={items}
          value={selectedValue}
          name="optionSelect"
          onChange={handleChange}
          required
        />
         <Option
          label="Modality/Device"
          labelPosition="top"
          items={items}
          value={selectedValue}
          name="optionSelect"
          onChange={handleChange}
          required
        />
         <Option
          label="Modality/Device"
          labelPosition="top"
          items={items}
          value={selectedValue}
          name="optionSelect"
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default FilterPatient;
