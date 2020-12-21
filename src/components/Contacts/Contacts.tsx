import React from 'react';
import {Space, Tag, Typography} from "antd";
import Icon, {CodepenOutlined, GithubOutlined, LinkedinOutlined, PhoneOutlined, SkypeOutlined} from '@ant-design/icons';
import telegramSvg from "../../icons/social/telegramSvg";
import vkSvg from "../../icons/social/vkSvg";
import gmailSvg from '../../icons/social/gmailSvg';

const {Link} = Typography;

const Contacts = React.memo(() => {
    return (
        <Space style={{padding: '0 50px 50px', justifyContent: 'center'}} wrap>
            <Link href="tel:+375445599306" target="_blank">
                <Tag icon={<PhoneOutlined/>} color="#7cb305">
                    +375(44)559-93-06
                </Tag>
            </Link>
            <Link href="skype:vanya9800?chat" target="_blank">
                <Tag icon={<SkypeOutlined/>} color="#55acee">
                    Skype
                </Tag>
            </Link>
            <Link href="https://www.linkedin.com/in/ivan-shavlovski/" target="_blank">
                <Tag icon={<LinkedinOutlined/>} color="#0A66C2">
                    Linkedin
                </Tag>
            </Link>
            <Link href="mailto:na613c613c@gmail.com" target="_blank">
                <Tag icon={<Icon component={gmailSvg}/>} color="#DB4437">
                    Gmail
                </Tag>
            </Link>
            <Link href="tg://resolve?domain=ivan613c" target="_blank">
                <Tag icon={<Icon component={telegramSvg}/>} color="#5682a3">
                    Telegram
                </Tag>
            </Link>
            <Link href="https://github.com/na-613c" target="_blank">
                <Tag icon={<GithubOutlined/>} color="#010409">
                    Github
                </Tag>
            </Link>
            <Link href="https://vk.com/shavlovsky98" target="_blank">
                <Tag icon={<Icon component={vkSvg}/>} color="#0077B4">
                    VKontakte
                </Tag>
            </Link>

            <Link href="https://codepen.io/na-613c" target="_blank">
                <Tag icon={<CodepenOutlined/>} color="#131417">
                    Codepen
                </Tag>
            </Link>
        </Space>

    );
});

export default Contacts;


