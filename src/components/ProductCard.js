import React from 'react';
import { Card } from 'flotiq-components-react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BuyButton from './BuyButton';

const ProductCard = ({ name, price, productImage, buttonLabel, slug }) => (
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
                <BuyButton
                    buttonLabel={buttonLabel}
                    slug={slug}
                    price={price}
                    productImage={productImage}
                    name={name}
                />
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

export default ProductCard;
