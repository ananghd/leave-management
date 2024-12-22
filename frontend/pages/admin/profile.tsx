import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Profile = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchAdminProfile = async () => {
            try {
                const response = await axios.get('/api/admin/profile');
                setAdmin(response.data);
            } catch (err) {
                setError('Failed to load profile');
            } finally {
                setLoading(false);
            }
        };

        fetchAdminProfile();
    }, []);

    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            await axios.put('/api/admin/profile', {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                dateOfBirth: formData.get('dateOfBirth'),
                gender: formData.get('gender'),
            });
            alert('Profile updated successfully');
        } catch (err) {
            setError('Failed to update profile');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container">
            <h1>Admin Profile</h1>
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" defaultValue={admin.firstName} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" defaultValue={admin.lastName} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" defaultValue={admin.email} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dateOfBirth" defaultValue={admin.dateOfBirth} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" defaultValue={admin.gender} className="form-control" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;