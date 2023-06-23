import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListView from './components/ListView';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setEmployees(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterEmployees = () => {
      if (searchTerm.trim() === '') {
        setFilteredEmployees(employees);
      } else {
        const filtered = employees.filter((employee) =>
          employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEmployees(filtered);
      }
    };

    filterEmployees();
  }, [searchTerm, employees]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ListView employees={filteredEmployees} />
    </div>
  );
};

export default App;
