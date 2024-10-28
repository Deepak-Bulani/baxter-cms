import React from 'react';
import TableClinical from '../TableClinical';
import { columns, data} from "../../data/clinicalData"

const AllPatientList = () => {
  return (
    <div>
      <TableClinical columns={columns} data={data} />
    </div>
  );
};

export default AllPatientList;
