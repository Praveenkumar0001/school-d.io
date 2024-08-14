import React from 'react';
import StudentDashboard from '../components/StudentDashboard';

const StudentView = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <StudentDashboard />
    </div>
  );
};

export default StudentView;
