import React from 'react';
import { Image, Header, Paragraph } from 'flotiq-components-react';
import Carousel from 'react-multi-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
    },
};
const CarouselNavigation = ({ goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="absolute left-0 top-0 w-full h-full flex items-center justify-between px-10 lg:px-14">
            <div
                className="cursor-pointer h-full flex items-center absolute -left-3 md:left-0"
                onClick={() => goToSlide(currentSlide - 1)}
            >
                <ChevronLeftIcon className="h-12 md:h-16 w-auto text-primary" />
            </div>
            <div
                className="cursor-pointer flex items-center"
                onClick={() => goToSlide(currentSlide + 1)}
            >
                <ChevronRightIcon className="h-12 md:h-16 w-auto text-primary absolute -right-3 md:right-0" />
            </div>
        </div>
    );
};

const ReviewsSection = ({ headerText, reviews, avatar, additionalClass }) => (
    <div
        className={['max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative', ...additionalClass].join(' ')}
    >
        <Header
            additionalClasses={['!text-xl md:!text-2xl !font-normal font-roboto uppercase !p-0']}
        >
            {headerText}
        </Header>
        <div className="px-5 md:px-20 relative">
            <Carousel
                draggable={false}
                infinite
                autoplay={false}
                responsive={responsive}
                arrows={false}
                customButtonGroup={<CarouselNavigation />}
                className="mx-auto mt-8 re"
                renderButtonGroupOutside
            >
                {reviews.map((review) => (
                    <div className="lg:mb-0 border border-primary mx-3" key={review.author}>
                        <Paragraph
                            additionalClasses={['!text-sm md:!text-base !font-light !leading-6 !p-3 md!p-5']}
                        >
                            {review.review}
                        </Paragraph>
                        <div className="grid grid-cols-3">
                            <div className="flex items-center space-x-3 h-full bg-black col-span-2">
                                <Image
                                    url={avatar}
                                    additionalClasses={['w-12 md:w-14']}
                                />
                                <Paragraph
                                    additionalClasses={['!text-sm md:!text-base !font-light text-white uppercase pl-1']}
                                >
                                    {review.author}
                                </Paragraph>
                            </div>
                            <div className="flex items-center justify-center text-xl md:text-2xl font-light">5/5</div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    </div>
);

export default ReviewsSection;
