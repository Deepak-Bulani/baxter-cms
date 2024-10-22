import React, {useState} from 'react';
import Calendar from '../svg/calendar.svg?react';
import BackArrow from '../svg/backArrow.svg?react';
import Camera from '../svg/camera.svg?react';
import Filter from '../svg/filter.svg?react';
import CustomCalendar from './Calendar/Calendar'; // Import the calendar component we created earlier

const ClinicalActions = () => {
  const events = [
    {date: '2024-10-22', title: 'Treatment A', type: 'MEETING'},
    {date: '2024-10-25', title: 'Follow-up', type: 'DEADLINE'},
  ];

  return (
    <div className="w-40 bg-gray-100 border border-gray-100">
      <div className="font-semibold bg-gray-300 pl-4">Actions</div>
      <div className="flex items-center space-x-2 cursor-pointer border-b border-gray-300 p-2">
        <BackArrow />
        <span className="text-black font-medium">Return to Dashboard</span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer border-b border-gray-300 p-2">
        <Camera />
        <span className="text-black font-medium">Claria Patient Snapshot</span>
      </div>

      <CustomCalendar
        events={events}
        position="right"
        onDateSelect={date => console.log('Selected date:', date)}
        trigger={
          <div className="flex items-center space-x-2 cursor-pointer border-b border-gray-300 p-2 w-full">
            <Calendar />
            <span className="text-black font-medium">Claria Treatment Summary</span>
          </div>
        }
        openOnHover
      />

      <div className="flex items-center space-x-2 cursor-pointer p-2">
        <Filter />
        <span className="text-black font-medium">Claria Device Settings</span>
      </div>
    </div>
  );
};

export default ClinicalActions;
