import React, { useState } from 'react';
import EmployeeItem from './EmployeeItem';

const ListView = ({ employees }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === employees.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? employees.length - 1 : prevIndex - 1));
  };

  if (employees.length === 0) {
    return <p>No employees found</p>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={handlePrevious}>Previous</button>
        <EmployeeItem
          avatar={employees[currentIndex].avatar}
          firstName={employees[currentIndex].first_name}
        />
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ListView;
