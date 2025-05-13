// src/components/DetalleVuelo.js
import React, { useEffect, useState } from 'react';
import '../CSS/DetalleVuelo.css';

const DetalleVuelo = () => {
  const [vuelo, setVuelo] = useState(null);

  useEffect(() => {
    const datos = localStorage.getItem('vueloProgramado');
    if (datos) {
      setVuelo(JSON.parse(datos));
    }
  }, []);

  if (!vuelo) return <p style={{ padding: 20 }}>No hay datos de vuelo programado.</p>;

  return (
    <div className="detalle-container">
      <h2>📋 Detalle del Vuelo Programado</h2>
      <ul>
        <li><strong>Dron:</strong> {vuelo.dron.nombre}</li>
        <li><strong>Disponible:</strong> {vuelo.dron.disponible ? 'Sí' : 'No'}</li>
        <li><strong>Batería:</strong> {vuelo.dron.bateria}</li>
        <li><strong>Tipo de Medicamento:</strong> {vuelo.tipoMedicamento}</li>
        <li><strong>Peso:</strong> {vuelo.peso} kg</li>
        <li><strong>Fecha de Envío:</strong> {vuelo.fecha}</li>
        <li><strong>Destino:</strong> {vuelo.lugar}, {vuelo.departamento}</li>
        <li><strong>Prioridad:</strong> {vuelo.prioridad}</li>
        <li><strong>Tiempo Estimado de Llegada:</strong> {vuelo.tiempoLlegada}</li>
      </ul>
    </div>
  );
};

export default DetalleVuelo;
