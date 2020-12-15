import Icon from '@ant-design/icons';
import React from 'react';

const cssSvg = () => {
    return <svg width="1em" height="1em" fill="white"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5191">
        <path d="M120.8 63.9l71.9 805.7 320 90 320-90 72-805.7z" fill="#2196F3" p-id="5192"></path>
        <path d="M752.3 327.1l-9.5 101.3-27.5 303.9-202.6 55.9-203.5-55.9-13.3-159h99.4l6.7 82.4 110.7 30.2 110.8-30.2 15.1-137.3-347.4 0.9-10.4-93.7 365.4-3.8 7.6-100.3-382.5 0.9-6.6-93.7h496.1z"
              fill="#FAFAFA" p-id="5193"></path>
    </svg>
};

const cssIcon = (props : any) => <Icon component={cssSvg} {...props} />;

export default cssIcon;