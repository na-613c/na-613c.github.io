import React, {FC, useEffect, useState} from 'react';
import {themes} from "./data/theme-context";
import App from "./App";
import MyProjectsModel from "./models/MyProjectsModel";
import darkVars from './dark.json';
import lightVars from './light.json';

declare global {
    interface Window {
        less: any;
    }
}

const ThemeController: FC<{ MyProjectsData: MyProjectsModel[] }> = ({MyProjectsData}) => {

    const [state, setState] = useState({
        theme: themes.light,
    });


    useEffect(() => {
        let CHOSEN_THEME = localStorage.getItem('TYPE_OF_THEME') || 'light';
        toggleTheme(CHOSEN_THEME === 'light')
    }, []);


    const toggleTheme = (isLight: boolean) => {
        isLight ? setState({theme: themes.light}) : setState({theme: themes.dark});
        isLight ?
            localStorage.setItem('TYPE_OF_THEME', 'light')
            : localStorage.setItem('TYPE_OF_THEME', 'dark');
        const less = window.less;
        console.log(less);
        isLight ? less.modifyVars(lightVars) : less.modifyVars(darkVars)


    };


    return (
        <App MyProjectsData={MyProjectsData}
             state={state}
             toggleTheme={toggleTheme}/>
    );
};


export default ThemeController;
