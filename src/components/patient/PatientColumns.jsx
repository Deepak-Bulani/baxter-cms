import React from 'react';
import {render} from 'react-dom';

export const columns = [
  {
    title: 'Patient Information',
    dataIndex: 'name',
    key: 'name',
    width: 300,
    align: 'center',
  },
  {
    title: 'Attending Physician',
    dataIndex: 'age',
    key: 'age',
    width: 300,
    align: 'center',
  },
  {
    title: 'Status',
    dataIndex: 'address',
    key: 'address',
    width: 300,
    align: 'center',
  },
  {
    title: 'Action',
    dataIndex: 'pId',
    key: 'pId',
    width: 400,
    align: 'center',
  },
];

export const data = [
  {
    name: 'Mr Dr. 1, mdspatient 15 February 1992 Clinic Patient',
    age: 'Dr. pal, charan',
    address: 'Active',
    pId: 'Edit',
  },
  {
    name: 'Mr Dr. 1, mdspatient 15 February 1992 Clinic Patient',
    age: 'Dr. pal, charan',
    address: 'Active',
    pId: 'Edit',
  },
];
