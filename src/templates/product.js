import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';

/**
 * Content of example page
 */
const ExamplePage = ({ data }) => {
    // Extracting data from GraphQL query, the query is on the bottom of this file
    const { product } = data;
    const products = data.allProduct.nodes;
    return (
        <Layout>
            {/* Content of <head> tag */}
            <Helmet>
                <title>{product.title}</title>
            </Helmet>
            <div>{product.name}</div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query ProductBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        product( slug: { eq: $slug } ) {
            name
            price
            slug
            description
            id
            productImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            productGallery {
                localFile {
                    publicURL
                }
            }
        }
        allProduct(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: 4, filter: {slug: {ne: $slug}}) {
            nodes {
                name
                price
                slug
                description
                id
                productGallery {
                    extension
                    url
                    width
                    height
                    localFile {
                        publicURL
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
                productImage {
                    extension
                    url
                    width
                    height
                    localFile {
                        publicURL
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    }
`;

export default ExamplePage;
