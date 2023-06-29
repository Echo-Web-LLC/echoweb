"use client";
import Image from 'next/image';
import logoKalen from './images/tkdlogo.png';
import logoJake from './images/Amoria-Tea-Cup-Logos-Vertical.svg';
import museduo from './images/museduologo.png';
import Carousel from 'react-material-ui-carousel';
import { SwiperSlide } from 'swiper/react';

export default function Testimonials() {

    const testimonials = [
        {
            id: 1,
            company: 'Amoria Tea',
            review: "Echo Web LLC has provided us a promising new website that our customers throughly enjoyed. Andrew and Jenny are true professionals. They helped renovate our outdated website by incorporating modern designs while keeping the theme of Amoria Tea in mind. Working with them was easy, with the constant communication and updates. They went above and beyond in answering any questions we had with their knowledge and expertise. I appreciate all the work they have done, and would highly recommend Echo Web to redesign your website.",
            logo: logoJake
        },
        {
            id: 2,
            company: "Tiger's TKD Omega",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            logo: logoKalen
        },
        {
            id: 3,
            company: "Muse Duo",
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cumque aliquam dicta exercitationem, cupiditate tenetur beatae ad quas ducimus culpa natus quia aut ex molestias delectus a quidem, aliquid fugiat.",
            logo: museduo
        },
    ]

    return (
        <>
            <div className="minHeight mx-auto max-w-5xl px-4 py-8">
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-4xl pb-8">
                    Read trusted reviews from our customers
                </h2>
                <Carousel>
                    {testimonials.map((review) => (
                        <SwiperSlide key={review.id}>
                            <section className="rounded-lg bg-gray-100 p-8">
                                <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                                    <Image
                                        alt="client logos"
                                        src={review.logo}
                                        className="aspect-square w-full rounded-lg object-contain"
                                    />

                                    <blockquote className="h-52 sm:col-span-2">
                                        <p className="text-md line-clamp-6 sm:line-clamp-none">
                                            {review.review}
                                        </p>

                                        <cite className="mt-8 inline-flex items-center not-italic">
                                            <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                                            <p className="text-lg uppercase text-gray-500 sm:ms-3">
                                                <strong>{review.company}.</strong>
                                            </p>
                                        </cite>
                                    </blockquote>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Carousel>
            </div>
        </>
    )
}