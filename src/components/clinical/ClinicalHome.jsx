import React from 'react';
import FilterPatient from './FilterPatient';
import Patient from '../patient/Patient';

const ClinicalHome = () => {
  return(
  <>
    <FilterPatient />
    <Patient />
  </>
  )
};

export default ClinicalHome;
