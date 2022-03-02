import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { Button, Header } from 'flotiq-components-react';
import Layout from '../layouts/layout';

/**
 * Content of example page
 */
const ExamplePage = ({ data }) => {
    // Extracting data from GraphQL query, the query is on the bottom of this file
    const { example } = data;
    return (
        <Layout>
            {/* Content of <head> tag */}
            <Helmet>
                <title>{example.title}</title>
            </Helmet>
            {/* Example usage of Header component with text from Flotiq Content Object */}
            <Header
                text={example.header}
                alignement="center"
                additionalClasses={['mt-24', 'mb-12']}
            />
            {/* Example usage of Header component with static text */}
            <Header
                additionalClasses={['mb-5']}
                level={3}
                text={(
                    <>
                        You can learn more about Flotiq in the
                        {' '}
                        <a href="https://flotiq.com/docs/" target="_blank" rel="noreferrer" className="underline">
                            documentation
                        </a>
                    </>
                )}
            />
            <div className="text-center mt-5 pt-5">
                {/* Example usage of button */}
                <Button label="Go to Flotiq page" onClick={() => window.open('https://flotiq.com', '_blank').focus()} />
            </div>

            <div className="text-center mt-5 pt-5">
                {/* Example usage of button */}
                <Link to="/"><Button label="Go back to index" /></Link>
            </div>
        </Layout>
    );
};

/**
 * GraphQL query getting data for the page
 * Here it request `slug`, `header` and `title` properties from `example` content type
 */
export const pageQuery = graphql`
    query exampleQuery($slug: String!) {
        example( slug: { eq: $slug } ) {
            slug
            header
            title
        }
    }
`;

export default ExamplePage;
