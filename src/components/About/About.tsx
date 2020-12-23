import React, {useEffect, useState} from 'react';
import {Col, Row, Typography} from 'antd';
import AnimationContainer from "./Animation/AnimationContainer";
import {useTranslation} from "react-i18next";

const {Title, Paragraph} = Typography;


const About = React.memo(() => {

    let [width, setWidth] = useState((500 < window.innerWidth * 0.83) ? 500 : window.innerWidth * 0.83);

    useEffect(() => {
        const handleResize = () => setWidth((500 < window.innerWidth * 0.83) ? 500 : window.innerWidth * 0.83);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const {t} = useTranslation();
    const aboutMe = t("about.body").split("\n").map((i, id) => <Paragraph key={id}>{i}</Paragraph>);

    return (
        <div style={{margin: '40px auto'}}>
            <Row justify="center" align="middle">
                <Col xs={{span: 20}} sm={{span: 14}} md={{span: 11}} lg={{span: 8}} xl={{span: 6}}>
                    <AnimationContainer width={width}/>
                </Col>
                <Col xs={{span: 20}} sm={{span: 14}} md={{span: 22}} lg={{span: 16}} xl={{span: 12}}>
                    <Title level={2}>{t("about.title")}</Title>
                    {aboutMe}
                </Col>
            </Row>
        </div>
    );
});

export default About;


