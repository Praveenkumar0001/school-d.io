import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
  const [classmates, setClassmates] = useState([]);
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedClassmates = await fetch('/api/classmates').then(res => res.json());
        const fetchedTimetable = await fetch('/api/timetable').then(res => res.json());

        setClassmates(fetchedClassmates);
        setTimetable(fetchedTimetable);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Student Dashboard</h2>

      <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
        <h3 className="text-2xl font-semibold mb-4">Classmates</h3>
        {classmates.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {classmates.map((classmate) => (
                <tr key={classmate.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{classmate.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{classmate.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No classmates available</p>
        )}
      </div>

      {timetable.length > 0 && (
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Timetable</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {timetable.map((entry, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.day}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
