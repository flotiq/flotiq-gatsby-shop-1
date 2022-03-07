import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Image, Paragraph, Header, Button } from 'flotiq-components-react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import Layout from '../layouts/layout';
import CustomersChoice from '../sections/CustomersChoice';

const buttonLabel = 'Add to cart';
const sizes = [
    { name: 'XS', current: false },
    { name: 'S', current: false },
    { name: 'M', current: false },
    { name: 'L', current: true },
    { name: 'XL', current: false },
    { name: 'XXL', current: false },
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
            <div className="flex flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="flex basis-full lg:basis-1/2 bg-contain bg-no-repeat bg-top"
                    style={{ backgroundImage:
                  `url('${product.productImage[0] && product.productImage[0].localFile.publicURL}')` }}
                >
                    <Image
                        url={product.productImage[0] && product.productImage[0].localFile.publicURL}
                        additionalClasses={['w-full lg:hidden']}
                    />
                </div>
                <div className="flex flex-col basis-full lg:basis-1/2 pl-0 lg:pl-12 pt-5 pb-10">
                    <Header
                        text={product.price}
                        additionalClasses={['!text-8xl !p-0 mt-3 md:mt-0 mb-5']}
                    />
                    <Header
                        additionalClasses={['text-xl md:text-4xl uppercase !font-light !pb-0']}
                        text={product.name}
                    />
                    <Paragraph text={product.description} additionalClasses={['mt-5 text-lg']} />
                    <div className="flex flex-col w-full md:w-1/2">
                        <div className="flex items-center justify-between text-xl font-light border-b border-gray/30
                        py-7 uppercase"
                        >
                            Size
                            <div>
                                <label htmlFor="categoryTabs" className="sr-only">
                                    Select a tab
                                </label>
                                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                                <select
                                    id="tabs"
                                    name="tabs"
                                    className="block w-full pl-7 pr-14 py-1 text-lg !font-light bg-light-gray"
                                    defaultValue={sizes.find((tab) => tab.current).name}
                                >
                                    {sizes.map((tab) => (
                                        <option key={tab.name}>{tab.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-xl font-light py-7 uppercase">
                            Quantity
                            <div className="flex items-center md:items-stretch ml-8 font-roboto bg-light-gray ">
                                <button
                                    type="button"
                                    className="flex items-center justify-center border border-primary py-2 md:py-1 px-2"
                                >
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    className="py-1 px-4 text-lg font-light"
                                >
                                    5
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center border border-primary py-2 md:py-1 px-2"
                                >
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <Button
                            label={buttonLabel}
                            rounded="none"
                            size="sm"
                            additionalClasses={['bg-transparent justify-center uppercase !text-base font-light '
                            + 'text-primary border shadow-none uppercase !px-5 !py-4 mt-1']}
                        />
                    </div>
                </div>
            </div>
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
