import React, { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Asegúrate de que la URL sea correcta según el puerto donde se ejecuta tu backend
      await axios.post('http://localhost:8080/api/v1/students', student);
      alert('Student saved successfully');
      // Puedes agregar más lógica como limpiar el formulario o actualizar una lista de estudiantes
    } catch (error) {
      console.error('Error saving student', error);
      alert('Error saving student');
    }
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>FirstName</label>
        <input
          type="text"
          name="firstName"
          value={student.firstName}
          onChange={handleChange}
        />
        <label>LastName</label>
        <input
          type="text"
          name="lastName"
          value={student.lastName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={student.email}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;