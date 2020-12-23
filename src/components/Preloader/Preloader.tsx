import React from 'react';


const Preloader = () => {
    const colors = ['#ec73a8', '#f29700', '#faef01', '#c1d500', '#9dd1a3', '#00a0ea', '#9fc3e7', '#b1569c'];

    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div style={{background: color, width: '100vw', height: '100vh'}}/>
    );
};

export default Preloader;

