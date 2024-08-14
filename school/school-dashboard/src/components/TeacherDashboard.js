import React, { useState, useEffect } from 'react';

const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [newEntry, setNewEntry] = useState({ subject: '', time: '' });

  useEffect(() => {
    // Fetch data from API or mock data
    const fetchData = async () => {
      try {
        // Mock API calls
        const fetchedStudents = await fetch('/api/students').then(res => res.json());
        const fetchedTimetable = await fetch('/api/timetable').then(res => res.json());

        setStudents(fetchedStudents);
        setTimetable(fetchedTimetable);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the new timetable entry (POST request)
    // For now, just log the new entry
    console.log('New Timetable Entry:', newEntry);
    setNewEntry({ subject: '', time: '' });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

      <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Students</h2>
        {students.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No students available</p>
        )}
      </div>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Timetable</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={newEntry.subject}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter subject"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={newEntry.time}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Save Timetable
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherDashboard;
