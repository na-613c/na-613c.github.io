import React, {FC, useEffect, useState} from 'react';
import App from "./App";
import MyProjectsModel from "./models/MyProjectsModel";
import darkVars from './theme/dark.json';
import lightVars from './theme/light.json';

declare global {
    interface Window {
        less: any;
    }
}

const ThemeController: FC<{ MyProjectsData: MyProjectsModel[] }> = ({MyProjectsData}) => {

    let [theme, setTheme] = useState(localStorage.getItem('TYPE_OF_THEME') || 'light');

    useEffect(() => {
        const less = window.less;
        (theme === 'light') ? less.modifyVars(lightVars) : less.modifyVars(darkVars)
    }, [theme]);

    const toggleTheme = (isLight: boolean) => {
        isLight ?
            localStorage.setItem('TYPE_OF_THEME', 'light')
            : localStorage.setItem('TYPE_OF_THEME', 'dark');
        setTheme(isLight ? 'light' : 'dark')
    };

    return (
        <App MyProjectsData={MyProjectsData}
             isLight={theme === 'light'}
             toggleTheme={toggleTheme}/>
    );
};


export default ThemeController;
