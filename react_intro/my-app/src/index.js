import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastro from './Components/Cadastro';
// import App from './App';
// import Exemplo from './Components/Exemplo';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const exemplo = ReactDOM.createRoot(document.getElementById('exemplo'));
// exemplo.render(
//   <React.StrictMode>
//     <Exemplo />
//   </React.StrictMode>
// );
const cadastro = ReactDOM.createRoot(document.getElementById('cadastro'));
cadastro.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
);

