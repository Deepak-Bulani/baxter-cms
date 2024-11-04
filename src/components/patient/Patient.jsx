import React from 'react';
import { useState } from 'react';
import {PATIENT_TABS} from '../../constants/mockData.js';
import AllPatientList from "../../components/patient/AllPatientList.jsx"
import MyPatientList from "../../components/patient/MyPatientList.jsx"

const Patient = () => {
  const [activeTab, setActiveTab] = useState("All Patient");
  const renderComponent = () => {
    switch (activeTab) {
      case 'All Patient':
        return <AllPatientList />;
      case 'My Patient':
        return <MyPatientList />;
      default:
        return <AllPatientList />;
    }
  };
  return (
    <div className="mt-4 border border-primary-borderColorNewrounded-b-[3px]">
      {PATIENT_TABS.map((item, index) => (
        <button
          key={index}
          className={`py-2 px-4 border-x border-t rounded-t-lg mt-4 ml-2 mr-2 ${
            activeTab === `${item}`
              ? 'bg-white text-blac border-[#042f2e] font-bold'
              : 'bg-white border-gray-300'
          }`}
          onClick={() => setActiveTab(item)}
        >
          {item}
        </button>
      ))}
      <div className="bg-primary-boxHeaderColor min-h-[20px] text-[12px] text-white"></div>
      <div className="m-4">{renderComponent()}</div>
    </div>
  );
};

export default Patient;
