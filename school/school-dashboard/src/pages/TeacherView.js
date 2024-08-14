import React from 'react';
import TeacherDashboard from '../components/TeacherDashboard';

const TeacherView = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <TeacherDashboard />
    </div>
  );
};

export default TeacherView;
