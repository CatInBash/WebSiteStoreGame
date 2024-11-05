import React, { useState } from 'react';
//import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

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
    <div className="Login-Form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>

        {/* Contenedor de los enlaces de ayuda */}
        <div className="help-text">
          <a href="#forgot-password">¿Olvidaste tu contraseña?</a>
          <span className="separator">|</span>
          <a href="#register">Registrate</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;