import React from 'react';
import cl from './MyHeader.module.css'
const MyHeader = () => {
    return (
        <div className={cl.MyHeader}>
            <h2 className='header__h2'>Github Profiles</h2>
        </div>
    );
};

export default MyHeader;