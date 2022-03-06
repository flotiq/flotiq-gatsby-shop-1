import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
import Logo from '../assets/shop-logo.svg';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-ubuntu bg-light-gray md:bg-white', ...additionalClass].join(' ')}>
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
