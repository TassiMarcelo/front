import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.studentId}>
            {student.firstName} {student.lastName} - {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;