import React, { useEffect, useState } from 'react';
import '../CSS/AlertaDronList.css';
import {
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaTools,
} from 'react-icons/fa';

const tipos = ['Crítico', 'Advertencia', 'Error leve'];
const lugares = ['Centro Médico Puno', 'Posta San Miguel', 'Loreto Rural', 'Ucayali Norte', 'Huancavelica Bajo'];
const razones = [
  'Dron no aterrizó correctamente',
  'Nivel de batería bajo',
  'Retraso por clima',
  'Se perdió señal GPS',
  'No se puede abrir compartimento',
];
const requerimientos = [
  'Asistencia técnica urgente',
  'Cambio de batería',
  'Reprogramación de entrega',
  'Revisión manual',
  'Reinicio remoto del sistema',
];

const generarAlerta = (id) => {
  const tipo = tipos[Math.floor(Math.random() * tipos.length)];
  const lugar = lugares[Math.floor(Math.random() * lugares.length)];
  const razon = razones[Math.floor(Math.random() * razones.length)];
  const requiere = requerimientos[Math.floor(Math.random() * requerimientos.length)];

  return { id, tipo, lugar, razon, requerimiento: requiere };
};

const AlertaDronList = () => {
  const [alertas, setAlertas] = useState([
    generarAlerta(1),
    generarAlerta(2),
    generarAlerta(3),
  ]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAlertas((prev) => {
        const nuevas = [...prev];
        nuevas.shift();
        nuevas.push(generarAlerta(Date.now()));
        return nuevas;
      });
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="alerta-contenedor">
      <h2 className="alerta-titulo">🚨 Alertas del Sistema de Drones</h2>
      {alertas.map((alerta) => (
        <div key={alerta.id} className={`alerta-linea ${alerta.tipo.toLowerCase().replace(' ', '-')}`}>
          <div className="alerta-icono">
            {alerta.tipo === 'Crítico' && <FaExclamationCircle className="icon-alerta rojo" />}
            {alerta.tipo === 'Advertencia' && <FaExclamationTriangle className="icon-alerta amarillo" />}
            {alerta.tipo === 'Error leve' && <FaInfoCircle className="icon-alerta azul" />}
          </div>
          <div className="alerta-contenido">
            <span className="badge">{alerta.tipo}</span>
            <span><FaMapMarkerAlt className="icon-icon rojo" /> {alerta.lugar}</span>
            <span>📄 {alerta.razon}</span>
            <span><FaTools className="icon-icon gris" /> {alerta.requerimiento}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertaDronList;
