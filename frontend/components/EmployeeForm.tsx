import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EmployeeForm = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          type="text"
          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          id="firstName"
          {...register('firstName', { required: 'First Name is required' })}
        />
        {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input
          type="text"
          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
          id="lastName"
          {...register('lastName', { required: 'Last Name is required' })}
        />
        {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          id="email"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Email is not valid' } } )}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input
          type="text"
          className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
          id="phoneNumber"
          {...register('phoneNumber', { required: 'Phone Number is required' })}
        />
        {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input
          type="text"
          className={`form-control ${errors.address ? 'is-invalid' : ''}`}
          id="address"
          {...register('address', { required: 'Address is required' })}
        />
        {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="form-label">Gender</label>
        <select
          className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
          id="gender"
          {...register('gender', { required: 'Gender is required' })}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <div className="invalid-feedback">{errors.gender.message}</div>}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default EmployeeForm;