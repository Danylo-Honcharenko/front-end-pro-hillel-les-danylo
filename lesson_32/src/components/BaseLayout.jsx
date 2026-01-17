import React from 'react';
import Header from "./Header.jsx";
import {Outlet} from "react-router";
import Footer from "./Footer.jsx";

const BaseLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default BaseLayout;