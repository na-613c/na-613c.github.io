import React, {FC, useEffect, useState} from 'react';
import './App.css';
import MyHeader from "./components/MyHeader/Header";
import MyFooter from "./components/MyFooter/MyFooter";
import MyProjectsModel from './models/MyProjectsModel';
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import {BackTop} from "antd";
import Contacts from "./components/Contacts/Contacts";
import 'antd/dist/antd.css'
import {useTranslation} from "react-i18next";

type props = {
    MyProjectsData: {
        'ru': MyProjectsModel[],
        'en': MyProjectsModel[]
    },
    isLight: boolean,
    toggleTheme: any
}

const App: FC<props> = ({MyProjectsData, isLight, toggleTheme}) => {
    const {i18n} = useTranslation();

    let [lang, setLang] = useState(localStorage.getItem('LANGUAGE') || 'ru');
    let [data, setData] = useState(MyProjectsData['ru']);

    const toggleLang = (isRu: boolean) => {
        isRu ? setLang('ru') : setLang('en')
    };

    useEffect(() => {
        i18n.changeLanguage(lang);
        // @ts-ignore
        setData(MyProjectsData[lang]);
        localStorage.setItem('LANGUAGE', lang);
    }, [lang]);

    return (
        <div className="App">
            <MyHeader isLight={isLight}
                      toggleTheme={toggleTheme}
                      toggleLang={toggleLang}
                      isRu={lang === 'ru'}/>
            <About/>
            <Contacts/>
            <Skills/>
            <Projects myProjectsData={data}/>
            <Education/>
            <MyFooter/>
            <BackTop/>
        </div>

    );
};


export default App;
