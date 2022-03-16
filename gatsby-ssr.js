const React = require('react');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

exports.onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script
            key="snipcart"
            async
            src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"
        />,
        <div hidden id="snipcart" key="snipcart-key" data-api-key={process.env.SNIPCART_API_KEY} />,
    ]);
};
