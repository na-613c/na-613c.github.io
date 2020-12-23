import {Footer} from 'antd/lib/layout/layout';
import React from 'react';
import {useTranslation} from "react-i18next";

const Style = {
    background: 'rgba(239, 219, 255,0.2)',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)',
    marginBottom: 10,
};

const MyFooter = React.memo(() => {
    const {t} = useTranslation();
    return (
        <Footer style={Style}>© 2020 {t("name")}</Footer>
    );
});

export default MyFooter;