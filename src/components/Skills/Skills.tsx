import React from 'react';
import {Tag} from "antd";
import Icon from '@ant-design/icons';
import jsIcon from '../../icons/jsIcon';
import cssIcon from '../../icons/cssIcon';
import scssIcon from '../../icons/scssIcon';
import htmlIcon from "../../icons/htmlIcon";
import gitIcon from "../../icons/gitIcon";
import tsIcon from "../../icons/tsIcon";
import reactIcon from "../../icons/reactIcon";
import reduxIcon from "../../icons/reduxIcon";
import mobxIcon from '../../icons/mobxIcon';
import ajaxIcon from "../../icons/ajaxIcon";


const Skills = () => {
    return (
        <div style={{paddingBottom:50}}>
            <Tag icon={<Icon component={htmlIcon} />} color="gold">
                HTML
            </Tag>
            <Tag icon={<Icon component={cssIcon} />} color="blue">
                CSS
            </Tag>
            <Tag icon={<Icon component={scssIcon} />} color="magenta">
                SCSS | SASS
            </Tag>
            <Tag icon={<Icon component={jsIcon} />} color="yellow">
                JavaScript
            </Tag>
            <Tag icon={<Icon component={tsIcon} />} color="geekblue">
                TypeScript
            </Tag>
            <Tag icon={<Icon component={ajaxIcon} />} color="geekblue">
                Ajax | Axios
            </Tag>
            <Tag icon={<Icon component={reactIcon} />} color="blue">
                React | React-redux
            </Tag>
            <Tag icon={<Icon component={reduxIcon} />} color="purple">
                Redux | Redux-thunk
            </Tag>
            <Tag icon={<Icon component={mobxIcon} />} color="orange">
                MobX
            </Tag>
            <Tag icon={<Icon component={gitIcon} />} color="volcano">
                Git
            </Tag>
        </div>

    );
};

export default Skills;


