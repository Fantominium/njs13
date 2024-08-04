"use client"
import React, { useState, useRef, useEffect } from 'react';
import ContentBlock from '@/components/atoms/ContentBlock/page'
import { RegistrationFormData } from '@/types/Registration';
import { registerUser } from '@/handlers/Registration/registrationHandler';
import { toast } from 'react-toastify';

type Props = {}

const RegistrationForm: React.FC = () => {
  const initialFormData: RegistrationFormData = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    rsvp: '',
  };
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

    // Ref for focus management
  const errorRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      setSuccess(null);
      return;
    }
    // Clear previous messages
    setError(null);
    setSuccess(null);

    // Use the registerUser function from the API module
    const response = await registerUser(formData);

    if (response.success) {
      setSuccess(response.message);
      toast.success('Registration successful');
      handleCancel(); // Clear the form
    } else {
      setError(response.message);
      toast.error('Error');

    }
  };

  // Focus error message when it changes
  useEffect(() => {
    if (error && errorRef.current) {
      errorRef.current.focus();
    }
  }, [error]);
  
  return (
    <ContentBlock>
      {/* <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-md rounded-lg"> */}
      <h2 className="text-2xl font-bold mb-6">Register</h2>

      {error && (
        <div
          ref={errorRef}
          tabIndex={-1} // Make div focusable
          className="bg-red-100 text-red-800 p-4 mb-4 rounded"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}

      {success && (
        <div
          className="bg-green-100 text-green-800 p-4 mb-4 rounded"
          role="status"
          aria-live="polite"
        >
          {success}
        </div>
      )}

  <form onSubmit={handleSubmit} aria-describedby="formInstructions">
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <p id="formInstructions" className="sr-only">
          All fields are required. Enter your details and submit the form.
        </p>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-primary">
            Email
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-black-100 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                aria-required="true"
              />
              </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-primary">
            First Name
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-black-100 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                aria-required="true"
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="lastName" className="lock text-sm font-medium leading-6 text-primary">
            Last Name
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-black-100 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                aria-required="true"
              />
              </div>
            </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="RSVP" className="lock text-sm font-medium leading-6">RSVP</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rsvp"
                value="Not Attending"
                checked={formData.rsvp === 'Not Attending'}
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Not Attending</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rsvp"
                value="Attending"
                checked={formData.rsvp === 'Attending'}
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Attending</span>
            </label>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="password" className="lock text-sm font-medium leading-6 text-primary">
            Password
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`block flex-1 border-0 bg-transparent py-1.5 pl-2 text-black-100 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6${
                  formData.password && formData.password !== formData.confirmPassword
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                aria-required="true"
                aria-describedby="passwordHelp"
              />
            </div>
          </div>
          <p id="passwordHelp" className="text-sm text-gray-500">
            Your password should be at least 8 characters long.
          </p>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="confirmPassword" className="lock text-sm font-medium leading-6 text-primary">
            Confirm Password
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={`block flex-1 border-0 bg-transparent py-1.5 pl-2 text-black-100 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6${
                  formData.confirmPassword && formData.password !== formData.confirmPassword
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                aria-required="true"
              />
          </div>
          {formData.password && formData.confirmPassword && (
            <span
              className={`text-sm mt-1 ${
                formData.password === formData.confirmPassword ? 'text-green-500' : 'text-red-500'
              }`}
              role="alert"
            >
              {formData.password === formData.confirmPassword
                ? 'Passwords match'
                : 'Passwords do not match'}
            </span>
          )}
        </div>
      </div>

      <div className="sm:col-span-4">

        <div className="mt-6 flex items-center justify-center gap-x-6 pb-24 sm:pb12 max-w-screen-md my-0 mx-auto">
        <button
              type="button"
              onClick={handleCancel}
              className="text-sm font-semibold leading-6 text-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
    </div>
  </form>
  </ContentBlock>
  )
}

export default RegistrationForm;