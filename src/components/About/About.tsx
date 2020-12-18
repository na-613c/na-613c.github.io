import React from 'react';
import {Col, Row, Typography} from 'antd';
import AnimationContainer from "./Animation/AnimationContainer";

const {Title, Paragraph} = Typography;


const About = () => {
    let width = (500 < window.innerWidth * 0.83) ? 500 : window.innerWidth * 0.83;
    return (
        <div style={{margin: '40px auto'}}>
            <Row justify="center" align="middle">
                <Col xs={{span: 20}} sm={{span: 14}} md={{span: 11}} lg={{span: 8}} xl={{span: 6}}>
                    <AnimationContainer width={width}/>
                </Col>
                <Col xs={{span: 20}} sm={{span: 14}} md={{span: 22}} lg={{span: 16}} xl={{span: 12}}>
                    <Title level={2}>Обо мне</Title>
                    <Paragraph>
                        Желаю развиваться в профессиональной сфере.
                    </Paragraph>
                    <Paragraph>
                        Имею не коммерческий опыт работы с HTML, CSS, SCSS, Java Script, Type Script, GIT, React js,
                        React-Redux, MobX, Rest API. Работал с такими дизайн-системами как Ant Design и Bootstrap. Так
                        же
                        взаимодействовал с jQuery и Node.js, в том числе делал парсер сайта и бота для Discord.
                        Проходил курсы Cisco: Introduction to Cybersecurity, Cybersecurity Essentials, CCNA R&S:
                        Introduction to
                        Networks.
                    </Paragraph>
                    <Paragraph>
                        Имеется военный билет.
                    </Paragraph>
                    <Paragraph>
                        Не имею вредных привычек.
                    </Paragraph>
                </Col>
            </Row>


        </div>
    );
};

export default About;


