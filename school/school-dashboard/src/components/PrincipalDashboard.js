import React, { useState, useEffect } from 'react';
import ClassroomForm from './ClassroomForm';
import TimetableForm from './TimetableForm';

const PrincipalDashboard = () => {
  // State for teachers, students, classrooms
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [classrooms, setClassrooms] = useState([]);

  // Fetch data here (for example, from an API)
  useEffect(() => {
    // Fetch teachers, students, and classrooms from an API
    const fetchData = async () => {
      // Mock API calls
      const fetchedTeachers = await fetch('/api/teachers').then((res) => res.json());
      const fetchedStudents = await fetch('/api/students').then((res) => res.json());
      const fetchedClassrooms = await fetch('/api/classrooms').then((res) => res.json());

      setTeachers(fetchedTeachers);
      setStudents(fetchedStudents);
      setClassrooms(fetchedClassrooms);
    };

    fetchData();
  }, []);

  // Function to handle creating a new classroom
  const onCreateClassroom = (newClassroom) => {
    setClassrooms([...classrooms, newClassroom]);
    // Optionally send new classroom data to an API
    // await fetch('/api/classrooms', { method: 'POST', body: JSON.stringify(newClassroom) });
  };

  // Handle actions for teachers and students
  const handleEdit = (type, id) => {
    console.log(`Edit ${type} with ID: ${id}`);
  };

  const handleDelete = (type, id) => {
    console.log(`Delete ${type} with ID: ${id}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Principal Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Create Classroom</h2>
          <ClassroomForm onCreateClassroom={onCreateClassroom} />
        </div>
        <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Create Timetable</h2>
          <TimetableForm />
        </div>
      </div>

      {/* Display teachers and students in tables */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Teachers</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teachers.length > 0 ? (
              teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit('teacher', teacher.id)}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete('teacher', teacher.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="px-6 py-4 text-center text-gray-500">
                  No teachers available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Students</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit('student', student.id)}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete('student', student.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="px-6 py-4 text-center text-gray-500">
                  No students available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrincipalDashboard;
