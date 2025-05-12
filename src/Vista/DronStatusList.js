import React, { useState } from 'react';
import '../CSS/DronStatusList.css';
import { FaMapMarkerAlt, FaBatteryHalf, FaClock, FaCloudSun } from 'react-icons/fa';
import DronRegistrar from '../Imagenes/DronRegistrar.jpg'; // Asegúrate que esta imagen exista

const climas = ['Soleado', 'Nublado', 'Lluvia ligera', 'Viento moderado'];
const departamentos = ['Lima', 'Cusco', 'Puno', 'Arequipa', 'Loreto', 'Piura', 'Ayacucho', 'San Martín'];

const generarEntregas = (cantidad) => {
  const dronesEjemplo = ['Dron A1', 'Dron B2', 'Dron C3'];
  const medicamentos = ['Vacunas', 'Insulina', 'Antibióticos'];
  const prioridades = ['Normal', 'Urgente', 'Crítica'];

  return Array.from({ length: cantidad }, (_, idx) => {
    const dep = departamentos[Math.floor(Math.random() * departamentos.length)];
    return {
      id: idx + 1,
      dron: dronesEjemplo[Math.floor(Math.random() * dronesEjemplo.length)],
      medicamento: medicamentos[Math.floor(Math.random() * medicamentos.length)],
      peso: (Math.random() * 1.5).toFixed(2),
      lugar: `Comunidad ${idx + 1}`,
      departamento: dep,
      prioridad: prioridades[Math.floor(Math.random() * prioridades.length)],
      clima: climas[Math.floor(Math.random() * climas.length)],
      tiempo: `${Math.floor(Math.random() * (90 - 30 + 1)) + 30} min`,
      bateria: `${Math.floor(Math.random() * 60) + 40}%`,
    };
  });
};

const DronStatusList = () => {
  const [entregas] = useState(generarEntregas(4));
  const [mapaVisible, setMapaVisible] = useState(null);

  return (
    <div className="status-container">
      <h2 className="titulo">Drones en Trayecto - Tiempo Real</h2>
      <div className="grid-container">
        {entregas.map((entrega) => (
          <div key={entrega.id} className="card">
            <img
              src={DronRegistrar}
              alt="dron"
              className="dron-img"
            />
            <h3>{entrega.dron}</h3>
            <p><strong>Medicamento:</strong> {entrega.medicamento}</p>
            <p><strong>Peso:</strong> {entrega.peso} kg</p>
            <p><strong>Prioridad:</strong> {entrega.prioridad}</p>

            <p>
              <FaMapMarkerAlt className="icon color-ubicacion" />
              <span>{entrega.lugar}, {entrega.departamento}</span>
            </p>
            <p>
              <FaCloudSun className="icon color-clima" />
              <span>{entrega.clima}</span>
            </p>
            <p>
              <FaClock className="icon color-tiempo" />
              <span>{entrega.tiempo}</span>
            </p>
            <p>
              <FaBatteryHalf className="icon color-bateria" />
              <span>{entrega.bateria}</span>
            </p>

            <button className="ver-mapa" onClick={() => setMapaVisible(entrega.departamento)}>
              Ver Mapa
            </button>
          </div>
        ))}
      </div>

      {mapaVisible && (
        <div className="mapa-modal">
          <div className="mapa-contenido">
            <button className="cerrar" onClick={() => setMapaVisible(null)}>X</button>
            <iframe
              title="Mapa"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapaVisible + ', Perú')}&output=embed`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DronStatusList;
