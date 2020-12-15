import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './index.css';
import MyProjectsData from './data/MyProjectsData';

ReactDOM.render(
  <React.StrictMode>
    <App MyProjectsData={MyProjectsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
