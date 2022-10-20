import React from 'react';
import { navigate } from 'gatsby';
import { Header } from 'flotiq-components-react';
import ProductCard from '../components/ProductCard';

const BestSellers = ({ products, additionalClass, headerText }) => (
    <div className={['w-full', ...additionalClass].join(' ')}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header
                additionalClasses={['!text-xl md:!text-2xl !font-normal font-roboto uppercase !p-0']}
            >
                {headerText}
            </Header>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 mt-6 mb-6"
            >
                {products.slice(0, 4).map((product) => (
                    <ProductCard
                        key={product.id}
                        onClick={() => { navigate(`/${product.slug}`); }}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        productImage={product.productImage[0] && product.productImage[0].localFile}
                        buttonLabel="Add to cart"
                        slug={product.slug}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default BestSellers;
