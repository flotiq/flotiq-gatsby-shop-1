import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Header } from 'flotiq-components-react';
import { Link } from 'gatsby';
import Layout from '../layouts/layout';

const NotFoundPage = () => (
    <Layout>
        <Helmet>
            <title>Page not found</title>
        </Helmet>
        <Header text="Page not found, sorry" />
        <div className="text-center mt-5 pt-5">
            {/* Example usage of button */}
            <Link to="/"><Button label="Go back to index" /></Link>
        </div>
    </Layout>
);

export default NotFoundPage;
