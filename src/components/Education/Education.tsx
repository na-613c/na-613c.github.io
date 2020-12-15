import React from 'react';
import {Avatar, Card, Col, Row, Space, Typography,Image} from 'antd';
import {CalendarOutlined} from '@ant-design/icons';
import education from '../../images/education.png';

const {Text, Link} = Typography;
const bsuirImg = 'https://iis.bsuir.by/assets/bsuir_logo2.png';

const Education = () => {
    return (
        <div>
            <Row justify="end" style={{marginBottom: 15, padding: '14px 20px'}}>
                <Col span={6} xs={{span: 20}} sm={{span: 16}} md={{span: 12}} lg={{span: 8}} xl={{span: 6}}>
                    <Image
                        width={200}
                        src={education}
                    />
                </Col>
                <Col span={6} xs={{span: 20}} sm={{span: 16}} md={{span: 12}} lg={{span: 8}} xl={{span: 6}}>
                    <Card title='Оброзование' bordered={false} hoverable={true} style={{textAlign: 'left'}}>
                        <Space align="start" style={{marginBottom: 15}}>
                            <Avatar shape="square" style={{backgroundColor: '#3A547F'}} src={bsuirImg}/>
                            <Text strong>
                                <Link href="https://www.bsuir.by/" target="_blank">
                                    Белорусский Государственный Университет Информатики и Радиоэлектроники
                                </Link>
                            </Text>
                        </Space>
                        <CalendarOutlined/><span> 2016-2020</span>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Education;


