import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ email: '', nombre: '',apellido:'',fechaNac:'',password:'',rpassword:'' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", formData);
    // Aquí puedes agregar la lógica para manejar el inicio de sesión.
  };

  return (
    <div className="Register-Form">
      <form onSubmit={handleSubmit}>
        <div>
          
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Correo Electronico'
            required
          />
        </div>


        <div>
            
            <input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder='Nombre'
            />
        </div>
        <div>
            
            <input
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                placeholder='apellido'
            />
        </div>



        <div>
            <label>fecha de nacimiento</label>
            <input
                type="date"
                name="fechaNac"
                value={formData.fechaNac}
                onChange={handleChange}
                required
            />
        </div>



        <div>
          
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder='Contraseña'
          />
        </div>

        <div>
          
          <input
            type="password"
            id="password"
            name="rpassword"
            value={formData.rpassword}
            onChange={handleChange}
            required
            placeholder='Repetir contraseña'
          />
        </div>
        <button type="submit">aceptar</button>

      
      </form>
    </div>
  );
};

export default RegisterForm;