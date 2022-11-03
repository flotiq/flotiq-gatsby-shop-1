import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
import Logo from '../assets/shop-logo.svg';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-ubuntu text-primary bg-light-gray md:bg-white', ...additionalClass].join(' ')}>
        <Helmet>
            <html lang="en" />
        </Helmet>
        <Header />
        {children}
        <Contact
            logoImage={Logo}
            additionalClass={['my-5']}
            socialIconsHeaderText="Find us"
            formHeaderText="Contact us"
            nameInputLabel="Name"
            emailInputLabel="Email"
            messageInputLabel="Message"
            buttonLabel="Contact"
            phoneNumber="+123 456 789"
            address="Demo Street"
            emailAddress="hello@world.com"
        />
        <Footer />
    </main>
);

export default Layout;
