import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const Layout = () => {
    const navigation = useNavigation();
    return (
        <>
            <Header></Header>
            <div>{navigation.state=='loading'? 'Loading...':''}</div>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </>
    );
};

export default Layout;