import React, {FC} from 'react';
import {Card, Col} from 'antd';
import ExampleProjectModel from "../../../models/ExampleProjectModel";
import ExampleProject from "./ExampleProject/ExampleProject";

type Props = { title: string, body: ExampleProjectModel[] };

const Style = {
    borderRadius: 10,
    boxShadow: 'inset 0px 0px 10px rgba(0,0,0,0.5)',
    cursor: 'default',
};

const MyProjects: FC<Props> = React.memo(({title, body}) => {
    const exampleProjects = body.map((i, id) => {
        return <ExampleProject example={i} id={id} key={id}/>
    });
    return (
        <Col xs={{span: 20}} sm={{span: 14}} md={{span: 11}} lg={{span: 8}} xl={{span: 6}}>
            <Card title={title} bordered={false} hoverable={true} style={Style}>
                {exampleProjects}
            </Card>
        </Col>
    );
});

export default MyProjects;


