import React, {FC, useState} from 'react';
import './App.css';
import MyHeader from "./components/MyHeader/Header";
import MyFooter from "./components/MyFooter/MyFooter";
import MyProjectsModel from './models/MyProjectsModel';
import {themes} from "./data/theme-context";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import {BackTop} from "antd";
import Contacts from "./components/Contacts/Contacts";


const App: FC<{ MyProjectsData: MyProjectsModel[] }> = ({MyProjectsData}) => {
    const [state, setState] = useState({
        theme: themes.light,
    });

    const toggleTheme = () => {
        console.log(state.theme);
        setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    };

    return (
        <div className="App" style={{backgroundColor: state.theme.background, color: state.theme.foreground}}>
            {/*<ThemeContext.Provider value={state.theme}>*/}
            <MyHeader themes={state.theme} toggleTheme={toggleTheme}/>
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
