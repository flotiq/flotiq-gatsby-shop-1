import React from 'react';
import { Button, Header, Image } from 'flotiq-components-react';

const linkedinPath = 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.4'
    + '8-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.'
    + '052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z';

const youtubeSvgContent = 'M20.6,7.6c-0.2-0.9-0.9-1.7-1.9-1.8c-1.5-0.2-4-0.5-6.7-0.5c-2.8,0-5.3,0.3-'
    + '6.7,0.5C4.4,5.9,3.6,6.6,3.4,7.6C3.2,8.6,3,10.1,3,12s0.2,3.4,0.4,4.4c0.2,0.9,0.9,1.7,1.9,1.8c1'
    + '.5,0.2,4,0.5,6.7,0.5c2.8,0,5.3-0.3,6.7-0.5c0.9-0.1,1.7-0.9,1.9-1.8c0.2-1,0.4-2.6,0.4-4.4C21,1'
    + '0.1,20.8,8.6,20.6,7.6z M10.2,15.1V8.9l5.4,3.1L10.2,15.1z';

const socialIcons = {
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/flotiq',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 13 25" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M8.30466 24.1211V13.5346H11.8761L12.407 9.38964H8.30466V6.74947C8.30466
                        5.55339 8.63791 4.73447 10.3545 4.73447H12.5297V1.03902C11.4714 0.925596
                        10.4076 0.870832 9.34316 0.874974C6.18633 0.874974 4.01891 2.80214 4.01891
                        6.34002V9.38189H0.470703V13.5268H4.02666V24.1211H8.30466Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/flotiq/',
            icon: (props) => (

                <svg fill="currentColor" viewBox="0 0 26 26" {...props}>
                    <path fillRule="evenodd" d={linkedinPath} clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/flotiq',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022
                    5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0
                    00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8
                    9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233
                    8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: 'https://flotiq.com',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path fillRule="evenodd" d={youtubeSvgContent} clipRule="evenodd" />
                </svg>
            ),
        },
    ],
};

const Contact = ({
    logoImage,
    additionalClass,
    socialIconsHeaderText,
    formHeaderText,
    nameInputLabel,
    emailInputLabel,
    messageInputLabel,
    buttonLabel,
    phoneNumber,
    address,
    emailAddress,
}) => (
    <div className={['grid md:grid-cols-2 max-w-7xl mx-auto mt-20 '
    + 'py-1 md:py-6 px-4 sm:px-6 lg:px-8', ...additionalClass].join(' ')}
    >
        <div className="flex flex-col md:items-start
        justify-start order-2 md:order-1 md:mt-10 lg:mt-0"
        >
            <Image url={logoImage} additionalClasses={['hidden md:block h-8 md:h-11 w-auto']} width="150" height="39" />
            <div className="grid xl:grid-cols-2 items-start justify-center md:justify-start p-5 xl:p-0 mt-7 md:mt-20">
                <div className="hidden md:block flex flex-col space-y-1 mb-10">
                    <Header
                        additionalClasses={['!font-light !text-2xl !p-0 mb-5 uppercase']}
                    >
                        {socialIconsHeaderText}
                    </Header>
                    <div className="flex space-x-4">
                        {socialIcons.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray p-2 bg-light-gray"
                            >
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col space-y-2 uppercase text-lg font-normal w-fit">
                    <p>
                        Phone:
                        <a href="/" className="ml-5 font-light">
                            {phoneNumber}
                        </a>
                    </p>
                    <p>
                        Address:
                        <span className="ml-5 font-light">{address}</span>
                    </p>
                    <p>
                        Email:
                        <a href="/" className="ml-5 font-light">
                            {emailAddress}
                        </a>
                    </p>
                </div>
            </div>
            <div className="w-full md:hidden flex flex-col items-center justify-between mt-10">
                <Image
                    url={logoImage}
                    additionalClasses={['h-10 md:h-16 w-auto mb-20']}
                    alt="Logo"
                    width="150"
                    height="39"
                />
                <Header additionalClasses={['!font-light !text-2xl !p-0 mb-3 uppercase']}>
                    Find us
                </Header>
                <div className="flex space-x-6">
                    {socialIcons.social.map((item) => (
                        <div className="flex items-center" key={item.name}>
                            <a
                                href={item.href}
                                className="text-gray p-2"
                            >
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start order-1 md:order-2">
            <div className="basis-10/12 lg:basis-2/3 xl:basis-1/2 order-1 md:order-2">
                <Header
                    additionalClasses={['!font-light !text-2xl !p-0 mb-5 uppercase text-center md:text-left']}
                >
                    {formHeaderText}
                </Header>
                <form
                    action="#"
                    method="POST"
                    className="font-light flex flex-col"
                >
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="full-name" className="sr-only">
                                {nameInputLabel}
                            </label>
                            <input
                                type="text"
                                name="full-name"
                                id="full-name"
                                autoComplete="name"
                                className="block w-full py-3 px-4 placeholder-primary/50 placeholder:font-light
                            placeholder:text-base placeholder:italic placeholder:uppercase border"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                {emailInputLabel}
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full py-3 px-4 placeholder-primary/50 placeholder:font-light
                            placeholder:text-base placeholder:italic placeholder:uppercase border"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                                {messageInputLabel}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={2}
                                className="block w-full py-3 px-4 placeholder-primary/50 placeholder:font-light
                            placeholder:text-base placeholder:italic placeholder:uppercase border"
                                placeholder="Message"
                            />
                        </div>
                    </div>
                    <Button
                        label={buttonLabel}
                        rounded="none"
                        additionalClasses={['w-fit text-base font-light text-white bg-primary justify-center '
                        + 'uppercase mt-4 md:mt-7 mx-auto md:mx-0']}
                    />
                </form>
            </div>
        </div>
    </div>
);

export default Contact;
