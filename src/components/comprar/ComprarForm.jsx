import React, { useState } from 'react';
//import './RegisterForm.css';

const ComprarForm = () => {
  const [formData, setFormData] = useState({  nombre: '',numero:'',fechaVenc:'',password:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", formData);
    // Aca se hace la peticion al servidor
  };

  return (
    <div className="Register-Form">
      <form onSubmit={handleSubmit}>
        <div>
            <label>titular de la tarjeta</label>
          
          <input
            
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            
            required
          />
        </div>


        <div>
            <label>numero de la tarjeta</label>
            
            <input
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                required
                
            />
        </div>
        <div>
            <label>fecha de vencimiento</label>
            
            <input
                id="fechaVenc"
                name="fechaVenc"
                value={formData.fechaVenc}
                onChange={handleChange}
                required
                
            />
        </div>



        <div>
            <label>Codigo de seguridad</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
        </div>



        

        <div>
          
          <label>PRECIO</label>
        </div>
        <button type="submit">Comprar</button>

      
      </form>
    </div>
  );
};

export default ComprarForm;