import React from 'react';
import AccountInformation from './AccountInformation';

const AccountSetting = () => {
  return (
    <div className="m-4 border border-[#999] border-b-5 border-b-[#6C8CB3] rounded-b-[3px] mb-5">
      <div className="bg-[#6c8cb3] min-h-[20px] leading-[100px] text-[12px] text-white"></div>
      <AccountInformation />
      <hr className="m-0 leading-none"></hr>
      <AccountInformation />
    </div>
  );
};

export default AccountSetting;
