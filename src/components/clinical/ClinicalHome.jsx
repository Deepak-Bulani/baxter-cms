import React from 'react';
import AllPatientList from '../../components/patient/AllPatientList.jsx';
import Accordian from 'baxterAtoms/Accordian';
import Button from 'baxterAtoms/Button';
import DataTable from 'baxterAtoms/DataTable';
import UserCard from 'baxterAtoms/UserCard';
import {columns, data} from '../../data/clinicalData.jsx';

const ClinicalHome = () => {
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
  const components = [
    {text: 'All Patient', comp: <AllPatientList />},
    {text: 'My Patient', comp: <AllPatientList />},
  ];

  const tabs = [
    {name: 'Clinical', content: 'Content for Clinical'},
    {name: 'Patient', content: 'Content for Patient'},
    {name: 'Customer Service', content: 'Content for Customer Service'},
  ];
  return (
    <>
      <Button
        text="Login"
        className="flex justify-center 
        items-center 
        border-2 
        rounded-md 
        text-black bg-gray 
        focus:outline-none 
        focus:ring-2 btn middle rounded-[3px] duration-500 ease-in-out center font-medium text-white text-ellipsis shadow-md transition-all hover:shadow-lg border border-collapse border-x-2 border-y-4 border-green-800"
      />
      <Accordian tabs={tabs} />
      <DataTable columns={columns} data={data} rowsPerPage={5} visiblePages={3} />
      <UserCard  accountDetails={accountDetails}/>

    </>
  );
};

export default ClinicalHome;
