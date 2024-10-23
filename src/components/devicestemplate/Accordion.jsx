import React, { useState } from 'react';

const Accordion = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div
        onClick={toggleVisibility}
        className="flex justify-between bg-[#6c8cb3] m-2 p-4 min-h-[4px] leading-[50px] text-[12px] text-white"
      >
        <div className="">Amia</div>
        <div className="">icon</div>
      </div>
      <div
        className="m-2 w-full p-4 bg-lightblue-200 mt-2"
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        This is my DIV element.
      </div>
    </div>
  );
};

export default Accordion;
