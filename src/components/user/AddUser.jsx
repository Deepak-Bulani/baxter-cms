import React from 'react';
import { useState } from 'react';
import {ADD_USER_TABS} from '../../constants/mockData.js';
import UserInfo from './UserInfo.jsx';
import PatientAccess from './PatientAccess.jsx';
import SiteAccess from './SiteAccess.jsx';

const AddUser = () => {
  const [activeTab, setActiveTab] = useState("User Information");
  const renderComponent = () => {
    switch (activeTab) {
      case 'User Information':
        return <UserInfo />;
      case 'Site Access':
        return <SiteAccess />;
      case 'Patient Access':
        return <PatientAccess />;
      default:
        return <UserInfo />;
    }
  };
  return (
    <div className="m-6 border border-[#999] rounded-b-[3px]">
      {ADD_USER_TABS.map((item, index) => (
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
      <div className="bg-[#6c8cb3] min-h-[20px] text-[12px] text-white"></div>
      <div className="m-4">{renderComponent()}</div>
    </div>
  );
};

export default AddUser;
