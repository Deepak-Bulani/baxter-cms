import React from 'react';
import {Link} from 'react-router-dom';

const AccountInformation = () => {
  const accountDetails = [
    {
      label: 'Name:',
      value: 'Admin, Muthu',
      link: '/change-name',
      linkText: 'Change name',
    },
    {
      label: 'Password:',
      value: '********',
      link: '/change-password',
      linkText: 'Change password',
    },
    {
      label: 'Email address:',
      value: 'muthuadmin@yopmail.com',
      link: '/change-email',
      linkText: 'Change email address',
    },
    {
      label: 'Security Question:',
      value: 'Your security question here',
      link: '/change-security-question',
      linkText: 'Change security question',
    },
  ];

  return (
    <div className="p-10">
      <h2 className="text-lg font-bold mb-4">Account Information</h2>
      {accountDetails.map((detail, index) => (
        <div key={index} className="mb-2 ml-2">
          <div className="grid items-stretch grid-cols-2">
            <div className="text-left font-bold m-0 leading-none">{detail.label}</div>
            <div className="text-left">
              <p className="text-xs m-0 leading-none">{detail.value}</p>
              <Link
                to={detail.link}
                className="text-blue-500 text-xs hover:underline m-0 leading-none block"
              >
                {detail.linkText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountInformation;
