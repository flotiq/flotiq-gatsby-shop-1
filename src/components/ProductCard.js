import React, { useEffect, useState } from 'react';
import { Button, Card } from 'flotiq-components-react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Handle quantity
// 1. Add quantity property in Flotiq dashboard, update products
// 2. Run gatsby clean
// 3. Add scoped api-key to read products
// 4. Add GATSBY_FLOTIQ_QUANTITY_API_KEY value .env, .env.development, .env.production file
// 5. Run gatsby develop
// 6. Make sure quantity exists in GraphQL browser http://localhost:8000/___graphql?query=query%20MyQuery%20%7B%0A%0A%20%20allProduct%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20slug%0A%20%20%20%20%20%20quantity%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A
// 7. Replace buy buttons with BuyButton component in ProductCard (homepage list)
// 8. Next steps: replace button in product page (including quantity selected)

// Build netlify/heroku/gatsby
// Add GATSBY_FLOTIQ_QUANTITY_API_KEY to netlify.toml and app.json

const QUANTITY_API_KEY = process.env.GATSBY_FLOTIQ_QUANTITY_API_KEY;
const PRODUCTS_API_URL = 'https://api.flotiq.com/api/v1/content/product';

const ProductCard = ({ name, price, productImage, buttonLabel, slug }) => {

    // Add quantity state
    const [productQuantity, setProductQuantity] = useState(null);

    // Get quantity from API
    useEffect(() => {
        const filter = {
            slug: {
                type: 'equals',
                filter: slug,
            },
        };
        const url = `${PRODUCTS_API_URL}?filters=${encodeURIComponent(JSON.stringify(filter))}`;
        fetch(url, {
            headers: {
                'X-AUTH-TOKEN': QUANTITY_API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => setProductQuantity(data.data[0].quantity));
    }, [slug]);

    return (
        <Card
            bordered={false}
            rounded="none"
            additionalClasses={['!bg-transparent mb-10 cursor-pointer']}
        >
            <Link to={`/${slug}`}>
                <GatsbyImage
                    image={getImage(productImage)}
                    alt={name}
                    className="w-full"
                />
            </Link>
            <Card.Body additionalClasses={['!px-0 !pt-4']}>
                <Link to={`/${slug}`}>
                    <Card.Title additionalClasses={['flex justify-between'
                    + ' !font-light !text-xl uppercase']}
                    >
                        {name}
                    </Card.Title>
                </Link>
                <div className="flex items-center mt-4 space-x-7">
                    {
                        /* Display button depending on productQuantity */
                    }
                    {(productQuantity !== null && productQuantity < 1)
                        ? (
                            <Button
                                disabled
                                label="Out of stock"
                                rounded="none"
                                size="sm"
                                additionalClasses={['bg-transparent justify-center uppercase !text-md font-light text-primary',
                                    'border shadow-none uppercase !px-5', 'snipcart-add-item', 'opacity-30']}
                            />
                        )
                        : (
                            <Button
                                label={buttonLabel}
                                rounded="none"
                                size="sm"
                                additionalClasses={['bg-transparent justify-center uppercase !text-md font-light text-primary',
                                    'border shadow-none uppercase !px-5', 'snipcart-add-item']}
                                data-item-id={slug}
                                data-item-price={price}
                                data-item-image={productImage.publicURL}
                                data-item-name={name}
                                data-item-url="/"
                            />
                        )}
                    <Link to={`/${slug}`}>
                        <p className="font-light text-2xl">
                            $
                            {price}
                        </p>
                    </Link>
                </div>

            </Card.Body>
        </Card>
    );
};

export default ProductCard;
