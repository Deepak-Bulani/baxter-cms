import React from 'react';
import Input from '../formcomponent/Input.jsx';

const UserInfo = () => {
  return (
    <div>
      <p className="text-sm">
        Please enter the following required information: Indicates required field.
      </p>
      <div className="grid  justify-start  grid-cols-1 sm:grid-cols-3 gap-1 mt-2">
        <Input
          label="Email Address"
          type="text"
          name="Email_Address"
          disabled={false}
          required={true}
        />

        <Input
          label="Confirm Email Address"
          type="text"
          name="Confirm_Email_Address"
          disabled={false}
          required={true}
        />

        <Input label="First Name" type="text" name="First_Name" disabled={true} required={true} />

        <Input label="Last Name" type="text" name="Last_Name" disabled={true} required={true} />

        <Input
          label="Middle Name"
          type="text"
          name="Middle_Name"
          disabled={true}
          required={false}
        />

        <Input
          label="Phone Number"
          type="text"
          name="Phone_Number"
          disabled={true}
          required={true}
        />

        <Input
          label="Alternate Phone Number"
          type="text"
          name="Alternate_Phone_Number"
          disabled={true}
          required={false}
        />
      </div>
    </div>
  );
};

export default UserInfo;
