import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider2 from './Provider.tsx'
import RoutingPage from './RoutingPage'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./assets/css/design.css";
import "./assets/css/photoEdit_1280-1389.css";
import "./assets/css/photoEdit_1390-1620.css";
import "./assets/css/reset.min.css";
import "./assets/css/photoEdit.css";
import "./assets/css/photoEdit_767.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider2>
        <RoutingPage />
        
    
  

    </Provider2>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
