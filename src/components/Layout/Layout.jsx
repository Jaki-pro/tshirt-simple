import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Layout = () => {
    const navigation = useNavigation();
    return (
        <>
            <Header></Header>
            <div>{navigation.state=='loading'? 'Loading...':''}</div>
            <Outlet></Outlet>
        </>
    );
};

export default Layout;