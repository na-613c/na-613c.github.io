import React, {FC} from 'react';
import {Collapse, Typography} from 'antd';
import ExampleProjectModel from "../../../../models/ExampleProjectModel";
import {LinkOutlined} from '@ant-design/icons';

const {Paragraph, Link} = Typography;
const {Panel} = Collapse;

type Props = { example: ExampleProjectModel, id: number };

const ExampleProject: FC<Props> = ({example, id}) => {

    return (

        <Collapse style={{textAlign: 'left'}}>
            <Panel header={example.name} key={id}>
                <Paragraph ellipsis={{rows: 2, expandable: true, symbol: 'more'}}>{example.description}</Paragraph>
                {!!example?.link &&
                <p>Рабочий проект:<br/>
                    <Link href={example.link} target="_blank"><LinkOutlined/> {example.link}</Link>
                </p>}
                <p>Код:<br/>
                    <Link href={example.code} target="_blank"><LinkOutlined/> {example.code}</Link>
                </p>
            </Panel>
        </Collapse>

    );
};

export default ExampleProject;


