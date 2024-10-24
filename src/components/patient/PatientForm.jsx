import {useState} from 'react';
import React from 'react';
import PatientInfo from './PatientInfo.jsx';
import PrimaryAdd from './PrimaryAdd.jsx';
import {DEVICE_PROGRAM_TAPS} from '../../constants/mockData.js';

const PatientForm = () => {
  const [activeTab, setActiveTab] = useState('Time');

  const renderComponent = () => {
    switch (activeTab) {
      case 'Time':
        return <PatientInfo />;
      case 'Volume':
        return <PrimaryAdd />;
      default:
        return <PatientInfo />;
    }
  };

  return (
    <div className="m-6 border border-[#999] rounded-b-[3px]">
      {DEVICE_PROGRAM_TAPS.map((item, index) => (
        <button
          key={index}
          className={`py-2 px-4 rounded-t-lg border mt-4 ml-2 mr-2 ${
            activeTab === `${item}`
              ? 'bg-white text-blac border-[#042f2e] font-bold'
              : 'bg-white border-gray-300'
          }`}
          onClick={() => setActiveTab(item)}
        >
          {item}
        </button>
      ))}
      <div className="bg-[#6c8cb3] min-h-[20px] text-[12px] text-white"></div>
      <div className="m-4">{renderComponent()}</div>
    </div>
  );
};

export default PatientForm;
