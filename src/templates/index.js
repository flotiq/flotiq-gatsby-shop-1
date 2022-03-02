import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { Button, Header, Pagination, Paragraph } from 'flotiq-components-react';
import Layout from '../layouts/layout';

/**
 * Content of index page
 */
const IndexPage = ({ data, pageContext }) => {
    // Extracting data from GraphQL query, the query is on the bottom of this file
    const examples = data.allExample.nodes;
    return (
        <Layout>
            {/* Content of <head> tag */}
            <Helmet>
                <title>Main page</title>
            </Helmet>
            {/* Example usage of Header component with text from Flotiq Content Object */}
            <Header
                text="Welcome to Flotiq gatsby starter boilerplate"
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
            <div className="mt-5 pt-5">
                <Header
                    text="Example pages:"
                    level={3}
                />
                {examples.map((example) => (
                    <Link to={`/${example.slug}`} className="underline hover:text-primary">
                        <Paragraph text={example.title} />
                    </Link>
                ))}
            </div>
            <Pagination numOfPages={pageContext.numPages} page={pageContext.currentPage} />
        </Layout>
    );
};

/**
 * GraphQL query getting data for the page
 * Here it request `slug` and `title` properties from `example` content type
 */
export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        allExample(sort: {fields: slug, order: ASC}, limit: $limit, skip: $skip,) {
            nodes {
                slug
                title
            }
        }
    }
`;

export default IndexPage;
