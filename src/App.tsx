import React, {FC} from 'react';
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

const App: FC<{ MyProjectsData: MyProjectsModel[], isLight: boolean, toggleTheme: any }> = ({MyProjectsData, isLight, toggleTheme}) => {

    const toggleLang = (isLight: boolean) => {

    };


    return (
        <div className="App" >
            {/*<ThemeContext.Provider value={state.theme}>*/}
            <MyHeader isLight={isLight} toggleTheme={toggleTheme}/>
            <About/>
            <Contacts/>
            <Skills/>
            <Projects MyProjectsData={MyProjectsData}/>
            <Education/>
            <MyFooter/>
            <BackTop/>
            {/*</ThemeContext.Provider>*/}
        </div>

    );
};


export default App;
