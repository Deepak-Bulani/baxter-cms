import React from 'react';
import AccountInformation from './AccountInformation';

const AccountSetting = () => {
  return (
    <div className="mt-4 border border-primary-borderColorNew border-b-5  border-primary-boxHeaderColor rounded-b-[3px] mb-5">
      <div className="bg-primary-boxHeaderColor min-h-[20px] leading-[100px] text-[12px] text-white"></div>
      <AccountInformation />
      <hr className="m-0 leading-none"></hr>
      <AccountInformation />
    </div>
  );
};

export default AccountSetting;
