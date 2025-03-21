// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { CartProvider } from "./conponent/CartContext";
// import 'flowbite';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <CartContext>
//     <App />
//   </CartContext>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





import React from 'react';
import ReactDOM from 'react-dom';
import {CartProvider} from './conponent/CartContext'
import './index.css';
import App from './App';

ReactDOM.render(
  <CartProvider>
      <App />
  </CartProvider>,
  document.getElementById('root')
);
