import React from 'react';
import {Avatar, Card, Col, Image, Row, Space, Typography} from 'antd';
import {CalendarOutlined} from '@ant-design/icons';
import education from '../../images/education.png';
import {useTranslation} from "react-i18next";

const {Text, Link, Title} = Typography;
const bsuirImg = 'https://iis.bsuir.by/assets/bsuir_logo2.png';


const style = {
    width: '100%',
    background: 'rgba(239, 219, 255, 0.2)',
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 15px',
};

const Education = React.memo(() => {
    const {t} = useTranslation();
    return (
        <div style={{paddingTop: 15}}>
            <Title level={2}> {t("education.title")} </Title>
            <Row justify="end" style={{marginBottom: 15, padding: '14px 20px'}}>
                <Col style={{paddingBottom: 15}} span={6} xs={{span: 20}} sm={{span: 16}} md={{span: 12}} lg={{span: 8}}
                     xl={{span: 6}}>
                    <Image
                        width={200}
                        src={education}
                    />
                </Col>
                <Col span={10} xs={{span: 20}} sm={{span: 16}} md={{span: 12}} lg={{span: 8}} xl={{span: 6}}>
                    <Card style={style} bordered={false} hoverable={true}>
                        <Space align="start" style={{marginBottom: 15, textAlign: 'left'}}>
                            <Avatar shape="square" style={{backgroundColor: '#3A547F'}} src={bsuirImg}/>
                            <Text strong>
                                <Link href="https://www.bsuir.by/" target="_blank">
                                    {t("education.body")}
                                </Link>
                            </Text>
                        </Space>
                        <CalendarOutlined/><span> 2016-2020</span>
                    </Card>
                </Col>
            </Row>
        </div>
    );
});

export default Education;


