import React, { useState } from 'react';
import axios from 'axios';

const TimetableForm = () => {
  const [subject, setSubject] = useState('');
  const [periods, setPeriods] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subject || periods.length === 0) {
      setError('Subject and periods are required');
      return;
    }
    try {
      await axios.post('/api/timetable/create', { subject, periods });
      alert('Timetable created');
      setSubject('');
      setPeriods([]);
      setError('');
    } catch (error) {
      console.error('Error creating timetable:', error);
      setError('Failed to create timetable. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Timetable</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Periods (comma separated)</label>
          <input
            type="text"
            placeholder="Periods"
            value={periods.join(', ')}
            onChange={(e) => setPeriods(e.target.value.split(', ').map(period => period.trim()))}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default TimetableForm;
