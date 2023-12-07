import React from 'react'
import NavBar from './NavBar';

const Profile = () => {

  const user = {
    firstName: 'John',
    lastName: 'Doe',
    dob: '09-12-2004',
    gender: 'Male',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
  };

  return (
    <div className='bg-sky-100 '>
      <div className="text-sky-800 container mx-auto py-10 h-screen bg-sky-100 text-center justify-center">
      <h1 className="text-3xl font-bold mb-4 p-5">{user.firstName} {user.lastName}'s  Profile Page</h1>
      <div className="grid grid-cols-1 gap-8">
        <div className='mx-auto'>
          <h2 className="text-xl font-semibold pb-5 underline">Personal Information</h2>
          <p className='p-2'>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p className='p-2'>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p className='p-2'>
            <strong>Date Of Birth:</strong> {user.dob}
          </p>
          <p className='p-2'>
            <strong>Email:</strong> {user.email}
          </p>
          <p className='p-2'>
            <strong>Phone Number:</strong> {user.phoneNumber}
          </p>
        </div>
        {/* You can add more sections for additional user information */}
      </div>
    </div>
    </div>
  )
}

export default Profile