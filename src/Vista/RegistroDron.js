import React, { useState, useEffect } from 'react';
import '../CSS/RegistroDron.css';
import {
  FaMapMarkerAlt,
  FaWeightHanging,
  FaSyringe,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaMicrochip,
} from 'react-icons/fa';

const drones = [
  { id: 1, nombre: 'Dron A1', disponible: true, bateria: '80%' },
  { id: 2, nombre: 'Dron B2', disponible: true, bateria: '65%' },
  { id: 3, nombre: 'Dron C3', disponible: false, bateria: '10%' },
];

const departamentos = [
  'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca',
  'Cusco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad',
  'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco',
  'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali',
];

const tiposMedicamento = ['Vacunas', 'Antibióticos', 'Insulina', 'Analgésicos', 'Otros'];

const RegistroDron = () => {
  const [selectedDron, setSelectedDron] = useState(drones[0]);
  const [fecha, setFecha] = useState('');
  const [tiempoLlegada, setTiempoLlegada] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [lugar, setLugar] = useState('');

  useEffect(() => {
    if (fecha && selectedDron) {
      const randomMinutes = Math.floor(Math.random() * (90 - 30 + 1)) + 30;
      setTiempoLlegada(`${randomMinutes} minutos`);
    } else {
      setTiempoLlegada('');
    }
  }, [fecha, selectedDron]);

  return (
    <div className="form-container">
      <form className="formulario">
        <h2 className="form-titulo">📦 Programar Envío de Medicamento</h2>

        <div className="form-group">
          <label><FaMicrochip className="icon icon-chip" /> Seleccionar Dron</label>
          <select
            onChange={(e) => {
              const dron = drones.find(d => d.nombre === e.target.value);
              setSelectedDron(dron);
            }}
          >
            {drones.map((dron) => (
              <option key={dron.id} value={dron.nombre}>
                {dron.nombre} {dron.disponible ? '(Disponible)' : '(No disponible)'}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label><FaSyringe className="icon icon-medicamento" /> Tipo de Medicamento</label>
          <select>
            <option>Seleccionar</option>
            {tiposMedicamento.map((tipo) => (
              <option key={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label><FaWeightHanging className="icon icon-peso" /> Peso del Paquete (kg)</label>
          <input type="number" min="0" max="1.5" step="0.1" />
        </div>

        <div className="form-group">
          <label><FaMapMarkerAlt className="icon icon-ubicacion" /> Departamento</label>
          <select onChange={(e) => setDepartamento(e.target.value)}>
            <option>Seleccionar</option>
            {departamentos.map((dep) => (
              <option key={dep}>{dep}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label><FaMapMarkerAlt className="icon icon-ubicacion" /> Lugar</label>
          <input
            type="text"
            placeholder="Nombre del lugar"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label><FaExclamationTriangle className="icon icon-prioridad" /> Prioridad</label>
          <select>
            <option>Normal</option>
            <option>Urgente</option>
            <option>Crítica</option>
          </select>
        </div>

        <div className="form-group">
          <label><FaCalendarAlt className="icon icon-fecha" /> Fecha de Envío</label>
          <input type="datetime-local" onChange={(e) => setFecha(e.target.value)} />
        </div>

        <div className="form-group" style={{ alignSelf: 'end' }}>
          <button type="submit">🚀 Programar Envío</button>
        </div>
      </form>

      <div className="dron-detalles">
        <h3>🛰️ Detalles del Dron</h3>
        <p><strong>Nombre:</strong> {selectedDron.nombre}</p>
        <p><strong>Disponible:</strong> {selectedDron.disponible ? 'Sí' : 'No'}</p>
        <p><strong>Batería:</strong> {selectedDron.bateria}</p>
        <p><strong>Lugar de despegue:</strong> Central de Salud</p>
        <p><strong>Destino estimado:</strong> {departamento && lugar ? `${lugar}, ${departamento}` : '-'}</p>
        <p><strong>Tiempo estimado de llegada:</strong> {tiempoLlegada || '-'}</p>
      </div>
    </div>
  );
};

export default RegistroDron;
