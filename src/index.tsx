import React from 'react';
import ReactDOM from 'react-dom';
import ThemeController from './ThemeController';
import reportWebVitals from './reportWebVitals';
import MyProjectsData from './data/MyProjectsData';
import './index.css'


ReactDOM.render(
    <React.StrictMode>
        <ThemeController MyProjectsData={MyProjectsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
