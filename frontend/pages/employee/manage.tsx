import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import EmployeeForm from '../../components/EmployeeForm';
import EmployeeList from '../../components/EmployeeList';

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleEmployeeCreated = (newEmployee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const handleEmployeeUpdated = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Manage Employees</h1>
      <EmployeeForm onEmployeeCreated={handleEmployeeCreated} />
      <EmployeeList employees={employees} onEmployeeUpdated={handleEmployeeUpdated} />
    </div>
  );
};

export default ManageEmployees;