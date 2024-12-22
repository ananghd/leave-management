import React, { useState } from 'react';
import axios from 'axios';

const LeaveForm = () => {
    const [leaveReason, setLeaveReason] = useState('');
    const [leaveStartDate, setLeaveStartDate] = useState('');
    const [leaveEndDate, setLeaveEndDate] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!leaveReason || !leaveStartDate || !leaveEndDate) {
            setError('All fields are required.');
            return;
        }

        try {
            await axios.post('/api/leaves', {
                leaveReason,
                leaveStartDate,
                leaveEndDate,
            });
            // Reset form fields
            setLeaveReason('');
            setLeaveStartDate('');
            setLeaveEndDate('');
        } catch (err) {
            setError('Failed to submit leave request.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Leave Request Form</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Leave Reason:</label>
                <input
                    type="text"
                    value={leaveReason}
                    onChange={(e) => setLeaveReason(e.target.value)}
                />
            </div>
            <div>
                <label>Leave Start Date:</label>
                <input
                    type="date"
                    value={leaveStartDate}
                    onChange={(e) => setLeaveStartDate(e.target.value)}
                />
            </div>
            <div>
                <label>Leave End Date:</label>
                <input
                    type="date"
                    value={leaveEndDate}
                    onChange={(e) => setLeaveEndDate(e.target.value)}
                />
            </div>
            <button type="submit">Submit Leave Request</button>
        </form>
    );
};

export default LeaveForm;