import React, {FC} from 'react';
import {Collapse, Typography} from 'antd';
import ExampleProjectModel from "../../../../models/ExampleProjectModel";
import {LinkOutlined} from '@ant-design/icons';
import {useTranslation} from "react-i18next";

const {Paragraph, Link} = Typography;
const {Panel} = Collapse;

type Props = { example: ExampleProjectModel, id: number };

const ExampleProject: FC<Props> = ({example, id}) => {
    const {t} = useTranslation();
    return (
        <Collapse style={{textAlign: 'left'}}>
            <Panel header={example.name} key={id}>
                <Paragraph ellipsis={{rows: 2, expandable: true, symbol: t("more")}}>{example.description}</Paragraph>
                {!!example?.link &&
                <p>{t("project")} :<br/>
                    <Link href={example.link} target="_blank">
                        <LinkOutlined/> {example.link.replace('https://', '')}
                    </Link>
                </p>}
                <p>{t("code")} :<br/>
                    <Link href={example.code} target="_blank">
                        <LinkOutlined/> {example.code.replace('https://', '')}
                    </Link>
                </p>
            </Panel>
        </Collapse>
    );
};

export default ExampleProject;


