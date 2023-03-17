
import React from 'react';
import Contador from "./components/Contador";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className='container mt-5'>
        <div className="row">
          <div className="col">
            <Contador></Contador>
            <Lista></Lista>
          </div>
          <div className="col">
          <Formulario></Formulario>
          </div>
        </div>
    </div>
  );
}

export default App;
