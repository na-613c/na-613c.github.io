import React, {FC, lazy, Suspense, useEffect, useState} from 'react';
import MyProjectsModel from "./models/MyProjectsModel";
import darkVars from './theme/dark.json';
import lightVars from './theme/light.json';
import Preloader from "./components/Preloader/Preloader";

const App = lazy(() => import("./App"));

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
    });


    const toggleTheme = (isLight: boolean) => {
        isLight ?
            localStorage.setItem('TYPE_OF_THEME', 'light')
            : localStorage.setItem('TYPE_OF_THEME', 'dark');
        setTheme(isLight ? 'light' : 'dark')
    };

    return (
        <Suspense fallback={<Preloader/>}>
            <App MyProjectsData={MyProjectsData}
                 isLight={theme === 'light'}
                 toggleTheme={toggleTheme}/>
        </Suspense>
    );
};


export default ThemeController;
