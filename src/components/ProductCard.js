import React from 'react';
import { Button, Card } from 'flotiq-components-react';
import { navigate } from 'gatsby';

const ProductCard = ({ name, price, productImage, buttonLabel, slug }) => (
    <Card
        bordered={false}
        rounded="none"
        additionalClasses={['!bg-transparent mb-10 cursor-pointer']}
        onClick={() => navigate(`/${slug}`)}
    >
        <Card.Img
            src={productImage}
            alt={name}
            additionalClasses={['w-full']}
        />
        <Card.Body additionalClasses={['!px-0 !pt-4']}>
            <Card.Title additionalClasses={['flex justify-between'
            + ' !font-light !text-xl uppercase']}
            >
                {name}
            </Card.Title>
            <div className="flex items-center mt-4 space-x-7">
                <Button
                    label={buttonLabel}
                    rounded="none"
                    size="sm"
                    additionalClasses={['bg-transparent justify-center uppercase !text-md font-light text-primary '
                    + 'border shadow-none uppercase !px-5']}
                />
                <p className="font-light text-2xl">
                    $
                    {price}
                </p>
            </div>

        </Card.Body>
    </Card>
);

export default ProductCard;
