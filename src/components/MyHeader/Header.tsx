import {Header} from 'antd/lib/layout/layout';
import React, {FC, useEffect} from 'react';

const Style = {
    background: 'rgba(239, 219, 255,0.2)',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)',
    marginBottom: 10,
};

const MyHeader: FC<any> = ({themes, toggleTheme}) => {

    useEffect(() => {
        console.log('useEffect')
    }, [themes]);

    return (

        <Header style={{...Style}}>
            HEADER
            <button style={{width: 100, height: 20}}
                    onClick={toggleTheme}
            />
        </Header>


    );
};

export default MyHeader;
