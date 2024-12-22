import React, { useState } from 'react';
import axios from 'axios';

const AdminForm = () => {
    const [adminData, setAdminData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData({ ...adminData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin', adminData);
            console.log('Admin created:', response.data);
        } catch (error) {
            console.error('Error creating admin:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={adminData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={adminData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={adminData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" name="dateOfBirth" value={adminData.dateOfBirth} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Gender</label>
                <select name="gender" value={adminData.gender} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={adminData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AdminForm;