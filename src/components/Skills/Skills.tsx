import React from 'react';
import {Tag} from "antd";
import Icon from '@ant-design/icons';
import jsIcon from '../../icons/technologies/jsIcon';
import cssIcon from '../../icons/technologies/cssIcon';
import scssIcon from '../../icons/technologies/scssIcon';
import htmlIcon from "../../icons/technologies/htmlIcon";
import gitIcon from "../../icons/technologies/gitIcon";
import tsIcon from "../../icons/technologies/tsIcon";
import reactIcon from "../../icons/technologies/reactIcon";
import reduxIcon from "../../icons/technologies/reduxIcon";
import mobxIcon from '../../icons/technologies/mobxIcon';
import ajaxIcon from "../../icons/technologies/ajaxIcon";


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


