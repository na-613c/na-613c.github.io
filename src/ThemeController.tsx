import React, {FC, Suspense, useEffect, useState} from 'react';
import App from "./App";
import MyProjectsModel from "./models/MyProjectsModel";
import darkVars from './theme/dark.json';
import lightVars from './theme/light.json';

declare global {
    interface Window {
        less: any;
    }
}

type props = {
    MyProjectsData: {
        'ru': MyProjectsModel[],
        'en': MyProjectsModel[]
    }
}

const ThemeController: FC<props> = ({MyProjectsData}) => {

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
        <Suspense fallback={<div>Loading...</div>}>
            <App MyProjectsData={MyProjectsData}
                 isLight={theme === 'light'}
                 toggleTheme={toggleTheme}/>
        </Suspense>
    );
};


export default ThemeController;
