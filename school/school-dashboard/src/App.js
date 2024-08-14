import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PrincipalView from './pages/PrincipalView';
import TeacherView from './pages/TeacherView';
import StudentView from './pages/StudentView';

function App() {
  return (
    <div className="App">
      <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Principal</Link>
          </li>
          <li>
            <Link to="/teacher" className="hover:underline">Teacher</Link>
          </li>
          <li>
            <Link to="/student" className="hover:underline">Student</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<PrincipalView />} />
          <Route path="/teacher" element={<TeacherView />} />
          <Route path="/student" element={<StudentView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
