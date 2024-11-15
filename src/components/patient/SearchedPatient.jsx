import React from 'react';
import DataTable from 'baxterAtoms/DataTable';
import {columns, data} from './PatientColumns.jsx';
const SearchedPatient = () => {
  return (
    <div>
      <DataTable columns={columns} data={data} rowsPerPage={5} visiblePages={3} />
    </div>
  );
};

export default SearchedPatient;
