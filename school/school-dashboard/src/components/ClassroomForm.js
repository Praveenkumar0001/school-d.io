import React, { useState } from 'react';

const ClassroomForm = ({ onCreateClassroom }) => {
  const [classroomDetails, setClassroomDetails] = useState({
    name: '',
    startTime: '',
    endTime: '',
    days: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (classroomDetails.name && classroomDetails.startTime && classroomDetails.endTime && classroomDetails.days) {
      onCreateClassroom(classroomDetails);
      setClassroomDetails({
        name: '',
        startTime: '',
        endTime: '',
        days: ''
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Classroom</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Classroom Name"
          value={classroomDetails.name}
          onChange={(e) => setClassroomDetails({ ...classroomDetails, name: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="time"
          placeholder="Start Time"
          value={classroomDetails.startTime}
          onChange={(e) => setClassroomDetails({ ...classroomDetails, startTime: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="time"
          placeholder="End Time"
          value={classroomDetails.endTime}
          onChange={(e) => setClassroomDetails({ ...classroomDetails, endTime: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Days (e.g., Monday to Saturday)"
          value={classroomDetails.days}
          onChange={(e) => setClassroomDetails({ ...classroomDetails, days: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Classroom</button>
      </form>
    </div>
  );
};

export default ClassroomForm;
