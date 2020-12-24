import {Header} from 'antd/lib/layout/layout';
import React, {FC} from 'react';
import {Col, Row, Switch, Typography} from "antd";
import Icon from '@ant-design/icons';
import darkSvg from "../../icons/dark-light/darkSvg";
import lightSvg from "../../icons/dark-light/lightSvg";
import {useTranslation} from "react-i18next";

const {Title} = Typography;


const Style = {
    background: 'rgba(239, 219, 255,0.2)',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)',
    marginBottom: 10,
    padding: '0 20px',
    lineHeight: '32px',
};

const MyHeader: FC<any> = React.memo(({isLight, toggleTheme, toggleLang, isRu}) => {
    const {t} = useTranslation();
    return (
        <Header style={{...Style}}>
            <Row justify="space-between" align="middle">
                <Col xs={{span: 20}} sm={{span: 15}}>
                    <Title level={2} style={{lineHeight: '48px'}}>{t("name")}</Title>
                </Col>
                <Col xs={{span: 4}} sm={{span: 2}}>
                    <Row justify="space-around">
                        <Col xs={{span: 24}} sm={{span: 10}}>
                            <Switch checkedChildren={<Icon component={lightSvg}/>}
                                    unCheckedChildren={<Icon component={darkSvg}/>}
                                    defaultChecked={isLight}
                                    onChange={toggleTheme}
                            />
                        </Col>
                        <Col xs={{span: 24}} sm={{span: 10}}>
                            <Switch checkedChildren='РУС'
                                    unCheckedChildren='ENG'
                                    defaultChecked={isRu}
                                    onChange={toggleLang}
                            />
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Header>
    );
});

export default MyHeader;
