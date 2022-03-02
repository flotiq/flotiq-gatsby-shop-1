import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Footer from '../components/Footer';
import Logo from '../assets/Logo.svg';

const Layout = ({ children, additionalClass = [] }) => (
    <main
        className={[
            'flex', 'flex-col', 'h-screen', 'justify-between', 'items-center', 'text-light-blue', ...additionalClass,
        ].join(' ')}
    >
        <Helmet>
            <html className="bg-dark-blue" lang="en" />
        </Helmet>
        <div className="m-5">
            <Link to="/"><img src={Logo} alt="Flotiq" width="300px" className="mx-auto" /></Link>
        </div>
        {children}
        <Footer />
    </main>
);

export default Layout;
