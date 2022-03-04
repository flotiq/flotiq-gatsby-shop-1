import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import ReviewsSection from '../reviews/ReviewsSection';
import Avatar from '../assets/avatar.jpg';

const reviews = [
    { review: 'The best store in our town! plants are always in good condition.',
        author: 'Joe Jonas' },
    { review: 'I ordered 3 packs of roses last friday and they all came so fast and fresh',
        author: 'Kate Smith' },
    { review: 'The staff was so sweet they helped me decorate my room with plants!',
        author: 'John Doe' },
    { review: 'The best store in our town! plants are always in good condition.',
        author: 'Jane Doe' },
    { review: 'I ordered 3 packs of roses last friday and they all came so fast and fresh',
        author: 'John Kovalski' },
    { review: 'The staff was so sweet they helped me decorate my room with plants!',
        author: 'Joe Novak' },
];

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
            <ReviewsSection
                headerText="Reviews"
                reviews={reviews}
                avatar={Avatar}
                additionalClass={['my-10 lg:my-24']}
            />
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
