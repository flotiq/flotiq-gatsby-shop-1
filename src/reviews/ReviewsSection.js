import React from 'react';
import { Image, Header, Paragraph } from 'flotiq-components-react';
import Carousel from 'react-multi-carousel';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const CarouselNavigation = ({ goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="md:w-3/4 m-auto flex items-center justify-between font-sora underline font-light text-sm mt-5">
            <div className="cursor-pointer flex items-center" onClick={() => goToSlide(currentSlide - 1)}>
                <ArrowLeftIcon className="mr-3 h-5 w-5 text-primary" />
                Previous work
            </div>
            <div className="cursor-pointer flex items-center" onClick={() => goToSlide(currentSlide + 1)}>
                Next work
                <ArrowRightIcon className="ml-3 h-5 w-5 text-primary" />
            </div>
        </div>
    );
};

const ReviewsSection = ({ headerText, reviews, avatar, additionalClass }) => (
    <div
        className={['max-w-7xl mx-auto flex flex-col', ...additionalClass].join(' ')}
    >
        <Header
            text={headerText}
            additionalClasses={['!font-light !text-6xl basis-full lg:basis-1/4 mb-5 lg:mb-0 text-center lg:text-left']}
        />
        <Carousel
            draggable={false}
            infinite
            autoplay={false}
            responsive={responsive}
            arrows={false}
            renderButtonGroupOutside
            customButtonGroup={<CarouselNavigation />}
        >
            {reviews.map((review) => (
                <div className="px-5 mb-5 lg:mb-0 border-l-2 border-light-gray">
                    <Paragraph text={review.review} additionalClasses={['!text-2xl !font-light !leading-6 mb-3']} />
                    <div className="flex items-center space-x-3">
                        <Image url={avatar} />
                        <Paragraph text={review.author} additionalClasses={['!text-xl !font-medium']} />
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
);

export default ReviewsSection;
