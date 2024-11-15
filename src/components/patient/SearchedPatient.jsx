import React from 'react';
import Table from 'baxterAtoms/Table';
import {testCols} from './PatientColumns';

const columns = [
  {
    header: 'Patient Information',
    accessor: 'patientInfo',
    className: 'w-1/3',
    render: (value, row) => (
      <div>
        <div>{row.name}</div>
        <div>{row.dob}</div>
        <div>Clinic Patient ID: {row.clinicId}</div>
        <div>Baxter Patient ID: {row.baxterId}</div>
      </div>
    ),
  },
  {
    header: 'Attending Physician',
    accessor: 'physician',
    className: 'w-1/4',
  },
  {
    header: 'Status',
    accessor: 'status',
    className: 'w-1/6',
  },
  {
    header: 'Action',
    accessor: 'action',
    className: 'w-1/6',
    render: (value, row) => <button className="text-blue-600 hover:underline">Edit</button>,
  },
];

const SearchedPatient = () => {
  return (
    <div>
      <Table columns={columns} data={testCols} pageSize={10} />
    </div>
  );
};

export default SearchedPatient;
