import React from 'react';

const EmployeeItem = ({ avatar, firstName }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={avatar} alt="Employee Avatar" style={{ width: '150px', height: '150px' }} />
      <p>{firstName}</p>
    </div>
  );
};

export default EmployeeItem;
