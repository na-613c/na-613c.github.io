import React, {FC} from 'react';
import {Card, Col} from 'antd';
import ExampleProjectModel from "../../../models/ExampleProjectModel";
import ExampleProject from "./ExampleProject/ExampleProject";

type Props = { title: string, body: ExampleProjectModel[] };

const MyProjects: FC<Props> = ({title, body}) => {
    const exampleProjects = body.map((i,id)=>{
        return <ExampleProject example={i} id={id} key={id} />
    });
    return (
        <Col xs={{span: 20}} sm={{span:14}} md={{span:11}} lg={{span:8}} xl={{span:6}}>
            <Card title={title} bordered={false} hoverable={true}>
                {exampleProjects}
            </Card>
        </Col>
    );
};

export default MyProjects;


