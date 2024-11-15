import React from 'react';
import SearchPatient from './SearchPatient';
import SearchedPatient from './SearchedPatient';

const Patient = () => {
  return (
    <div>
      <div class="bg-primary-boxHeaderColor min-h-[20px] leading-[20px] text-xs text-white px-5">
        Search Criteria
      </div>
      <div class="p-2.5 border border-gray-400 border-b-4 border-primary-boxHeaderColor rounded-b-md mb-3">
        <SearchPatient />
      </div>
      <SearchedPatient />
    </div>
  );
};

export default Patient;
