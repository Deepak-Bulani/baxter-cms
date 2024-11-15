import React from 'react';
import UserInfo from './UserInfo.jsx';
import PatientAccess from './PatientAccess.jsx';
import SiteAccess from './SiteAccess.jsx';
import Tabs from 'baxterAtoms/Tabs';


const AddUser = () => {
  
  const components = [
    {text: 'User Information', comp: <UserInfo />},
    {text: 'Site Access', comp: <SiteAccess />},
    {text: 'Patient Access', comp: <PatientAccess />},
  ];

  return (
    <>
     <Tabs props={components} />
   </>
   
  );
};

export default AddUser;
    