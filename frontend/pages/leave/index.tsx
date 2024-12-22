import { useEffect, useState } from 'react';
import axios from 'axios';
import LeaveForm from '../../components/LeaveForm';
import EmployeeList from '../../components/EmployeeList';

const LeavePage = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        const response = await axios.get('/api/leave');
        setLeaveData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLeaveData();
  }, []);

  return (
    <div className="container">
      <h1>Employee Leave Management</h1>
      {error && <p className="text-danger">{error}</p>}
      <LeaveForm />
      <EmployeeList leaveData={leaveData} />
    </div>
  );
};

export default LeavePage;