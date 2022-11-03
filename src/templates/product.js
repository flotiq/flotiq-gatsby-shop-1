import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Paragraph, Header, Button } from 'flotiq-components-react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../layouts/layout';
import CustomersChoice from '../sections/CustomersChoice';
import ReviewsSection from '../sections/ReviewsSection';
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

const buttonLabel = 'Add to cart';
// const sizes = [
//     { name: 'XS', current: false },
//     { name: 'S', current: false },
//     { name: 'M', current: false },
//     { name: 'L', current: true },
//     { name: 'XL', current: false },
//     { name: 'XXL', current: false },
// ];

/**
 * Content of example page
 */
const ExamplePage = ({ data }) => {
    const [quantity, setQuantity] = useState(1);
    // Extracting data from GraphQL query, the query is on the bottom of this file
    const { product } = data;
    const products = data.allProduct.nodes;
    return (
        <Layout>
            {/* Content of <head> tag */}
            <Helmet>
                <title>{product.title}</title>
                <meta
                    name="description"
                    content={product.description}
                />
            </Helmet>
            <div className="flex flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="flex basis-full lg:basis-1/2"
                >
                    <GatsbyImage
                        image={getImage(product.productImage[0] && product.productImage[0].localFile)}
                        alt={product.name}
                        objectFit="contain"
                        objectPosition="top"
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col basis-full lg:basis-1/2 pl-0 lg:pl-12 pt-5 pb-10">
                    <Header
                        additionalClasses={['!text-8xl !p-0 mt-3 md:mt-0 mb-5']}
                    >
                        {product.name}
                    </Header>
                    <Header
                        additionalClasses={['text-xl md:text-4xl uppercase !font-light !pb-0']}
                    >
                        {`$${product.price}`}
                    </Header>
                    <Paragraph additionalClasses={['mt-5 text-lg']}>
                        {product.description}
                    </Paragraph>
                    <div className="flex flex-col w-full md:w-1/2">
                        {/* <div className="flex items-center justify-between text-xl font-light border-b border-gray/30 */}
                        {/* py-7 uppercase" */}
                        {/* > */}
                        {/*    Size */}
                        {/*    <div> */}
                        {/*        <label htmlFor="categoryTabs" className="sr-only"> */}
                        {/*            Select a tab */}
                        {/*        </label> */}
                        {/*        /!* Use an "onChange" listener to redirect the user to the selected tab URL. *!/ */}
                        {/*        <select */}
                        {/*            id="tabs" */}
                        {/*            name="tabs" */}
                        {/*            className="block w-full pl-7 pr-14 py-1 text-lg !font-light bg-light-gray" */}
                        {/*            defaultValue={sizes.find((tab) => tab.current).name} */}
                        {/*        > */}
                        {/*            {sizes.map((tab) => ( */}
                        {/*                <option key={tab.name}>{tab.name}</option> */}
                        {/*            ))} */}
                        {/*        </select> */}
                        {/*    </div> */}
                        {/* </div> */}
                        <div className="flex items-center justify-between text-xl font-light py-7 uppercase">
                            Quantity
                            <div className="flex items-center md:items-stretch ml-8 font-roboto bg-light-gray ">
                                <button
                                    type="button"
                                    className="flex items-center justify-center border border-primary py-2 md:py-1 px-2"
                                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                >
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    className="py-1 px-4 text-lg font-light"
                                >
                                    {quantity}
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center border border-primary py-2 md:py-1 px-2"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <Button
                            label={buttonLabel}
                            rounded="none"
                            size="sm"
                            additionalClasses={['bg-transparent justify-center uppercase !text-base font-light',
                                'text-primary border shadow-none uppercase !px-5 !py-4 mt-1', 'snipcart-add-item']}
                            data-item-id={product.slug}
                            data-item-price={product.price}
                            data-item-image={product.productImage[0] && product.productImage[0].localFile.publicURL}
                            data-item-name={product.name}
                            data-item-url="/"
                            data-item-quantity={quantity}
                        />
                    </div>
                </div>
            </div>
            <ReviewsSection
                headerText="Reviews"
                reviews={reviews}
                avatar={Avatar}
                additionalClass={['my-10 lg:my-24']}
            />
            <CustomersChoice
                products={products}
                additionalClass={['my-5']}
                headerText="Other customers also chose"
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
        allProduct(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: 5, filter: {slug: {ne: $slug}}) {
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
