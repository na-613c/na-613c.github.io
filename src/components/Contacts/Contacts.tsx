import React from 'react';
import {Tag, Typography} from "antd";
import Icon, {
    CodepenOutlined,
    GithubOutlined,
    GoogleOutlined,
    LinkedinOutlined,
    PhoneOutlined,
    SkypeOutlined
} from '@ant-design/icons';
import telegramIcon from "../../icons/social/teletgram";

const {Link} = Typography;

const Contacts = () => {
    return (
        <div style={{paddingBottom: 50}}>
            <Link href="#" target="_blank">
                <Tag icon={<GithubOutlined/>} color="#010409">
                    Github
                </Tag>
            </Link>
            <Link href="#" target="_blank">
                <Tag icon={<SkypeOutlined/>} color="#55acee">
                    Skype
                </Tag>
            </Link>
            <Link href="#" target="_blank">
                <Tag icon={<GoogleOutlined/>} color="#fa541c">
                    Google
                </Tag>
            </Link>
            <Link href="#" target="_blank">
                <Tag icon={<LinkedinOutlined/>} color="#0A66C2">
                    Linkedin
                </Tag>
            </Link>
            <Link href="#" target="_blank">
                <Tag icon={<PhoneOutlined/>} color="#7cb305">
                    +375(44)559-93-06
                </Tag>
            </Link>
            <Link href="#" target="_blank">
                <Tag icon={<CodepenOutlined/>} color="#131417">
                    Codepen
                </Tag>
            </Link>
            <Link href="#" target="_blank">
                <Tag icon={<Icon component={telegramIcon}/>} color="#5682a3">
                    Telegram
                </Tag>
            </Link>
        </div>

    );
};

export default Contacts;


