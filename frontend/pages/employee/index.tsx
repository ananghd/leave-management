import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeList from '../../components/EmployeeList';

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <h1>Employee Management</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default EmployeePage;