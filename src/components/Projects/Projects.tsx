import React, {FC} from 'react';
import {Row, Typography} from 'antd';
import MyProjects from './MyProjects/MyProjects';
import MyProjectsModel from '../../models/MyProjectsModel';

const {Title} = Typography;


const Style = {
    background: 'rgba(239, 219, 255,0.2)',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)',
    marginBottom: 10,
    padding: '15px 20px',
};


const Projects: FC<{ MyProjectsData: MyProjectsModel[] }> = ({MyProjectsData}) => {

    const projects = MyProjectsData.map((i, id) => {
        return <MyProjects title={i.title} body={i.example} key={id}/>
    });

    return (
        <div style={Style}>
            <Title level={2}> Мои проекты </Title>
            <Row gutter={[16, 24]} justify="space-around">
                {projects}
            </Row>
        </div>
    );
};

export default Projects;


