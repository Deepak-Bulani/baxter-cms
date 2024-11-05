import React from 'react';
import FilterPatient from './FilterPatient';

import AllPatientList from '../../components/patient/AllPatientList.jsx';
import MyPatientList from '../../components/patient/MyPatientList.jsx';

import Tabs from "../../components/formcomponent/Tabs.jsx"

const ClinicalHome = () => {
  const components = [
    {text: 'All Patient', comp: <AllPatientList />},
    {text: 'My Patient', comp: <MyPatientList />},
  ];

  return (
    <>
      <FilterPatient />
      <Tabs props={components} />
    </>
  );
};

export default ClinicalHome;
