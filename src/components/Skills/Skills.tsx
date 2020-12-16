import React from 'react';
import {Tag} from "antd";
import Icon from '@ant-design/icons';
import jsSvg from '../../icons/technologies/jsSvg';
import cssSvg from '../../icons/technologies/cssSvg';
import scssSvg from '../../icons/technologies/scssSvg';
import htmlSvg from "../../icons/technologies/htmlSvg";
import gitSvg from "../../icons/technologies/gitSvg";
import tsSvg from "../../icons/technologies/tsSvg";
import reactSvg from "../../icons/technologies/reactSvg";
import reduxSvg from "../../icons/technologies/reduxSvg";
import mobxSvg from '../../icons/technologies/mobxSvg';
import ajaxSvg from "../../icons/technologies/ajaxSvg";

const style = {
    color: '#000',
    borderColor: '#000',
};

const Skills = () => {
    return (
        <div style={{paddingBottom: 50}}>
            <Tag icon={<Icon component={htmlSvg}/>} color="gold">
                HTML
            </Tag>
            <Tag icon={<Icon component={cssSvg}/>} color="blue">
                CSS
            </Tag>
            <Tag icon={<Icon component={scssSvg}/>} color="magenta">
                SCSS | SASS
            </Tag>
            <Tag style={style} icon={<Icon component={jsSvg}/>} color="yellow">
                JavaScript
            </Tag>
            <Tag icon={<Icon component={tsSvg}/>} color="geekblue">
                TypeScript
            </Tag>
            <Tag icon={<Icon component={ajaxSvg}/>} color="geekblue">
                Ajax | Axios
            </Tag>
            <Tag icon={<Icon component={reactSvg}/>} color="blue">
                React
            </Tag>
            <Tag icon={<Icon component={reduxSvg}/>} color="purple">
                Redux | Redux-thunk
            </Tag>
            <Tag icon={<Icon component={mobxSvg}/>} color="orange">
                MobX
            </Tag>
            <Tag icon={<Icon component={gitSvg}/>} color="volcano">
                Git
            </Tag>
        </div>

    );
};

export default Skills;


