import {Header} from 'antd/lib/layout/layout';
import React, {FC} from 'react';
import {Space, Switch} from "antd";
import Icon from '@ant-design/icons';
import darkSvg from "../../icons/dark-light/darkSvg";
import lightSvg from "../../icons/dark-light/lightSvg";


const Style = {
    background: 'rgba(239, 219, 255,0.2)',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)',
    marginBottom: 10,
};

const MyHeader: FC<any> = ({themes, toggleTheme}) => {

    function onChange(checked: boolean) {
        console.log(checked ? 'rus' : 'eng')

    }

    return (
        <Header style={{...Style}}>
            <Space>
                <span> Шавловский Иван </span>
                <Switch checkedChildren={<Icon component={lightSvg}/>}
                        unCheckedChildren={<Icon component={darkSvg}/>}
                        defaultChecked
                        onChange={toggleTheme}
                />
                <Switch checkedChildren='РУС'
                        unCheckedChildren='ENG'
                        defaultChecked
                        onChange={onChange}
                />
            </Space>
        </Header>
    );
};

export default MyHeader;
