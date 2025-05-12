import RegistroDron from './Vista/RegistroDron';
import DronStatusList from './Vista/DronStatusList';
import AlertaDronList from './Vista/AlertaDronList';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Envío de Medicamentos por Dron
        </h1>
        <RegistroDron />
      </div>
      <div className="bg-slate-100 px-6 py-8">
        <DronStatusList />
      </div>
      <div>
        <AlertaDronList/>
      </div>
    </>
  );
}

export default App;
