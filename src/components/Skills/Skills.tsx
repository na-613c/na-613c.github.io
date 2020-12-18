import React from 'react';
import {Space, Tag} from "antd";
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


const Skills = () => {
    return (
        <Space style={{padding: '0 50px 50px', justifyContent: 'center'}} wrap>
            <Tag icon={<Icon component={htmlSvg}/>} color="gold">
                HTML
            </Tag>
            <Tag icon={<Icon component={cssSvg}/>} color="blue">
                CSS
            </Tag>
            <Tag icon={<Icon component={scssSvg}/>} color="magenta">
                SCSS | SASS
            </Tag>
            <Tag icon={<Icon component={jsSvg}/>} color="yellow">
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
        </Space>
    );
};

export default Skills;


