import Image from 'next/image';
import logodarkbg from './images/favicon.jpg';

const Aboutbanner = () => {
    return (
        <div>
            <section>
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 bg-blue-50 rounded-lg"
                >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        >
                            <Image
                                alt="Party"
                                src={logodarkbg}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl text-gray-800 font-bold sm:text-4xl">Our Why&apos;s</h2>

                            <article className="mt-4 text-gray-600">
                                <h4 className='text-xl text-gray-600 font-medium'>Mission</h4>
                                Empower individuals and businesses with a user-friendly web application, Echo Dash, that seamlessly combines the power of content management, design customization, and machine learning-assisted features to create engaging and optimized websites.
                                <br />
                                <br />
                                <h4 className='text-xl text-gray-600 font-medium'>Vision</h4>
                                Revolutionize the way digital products are built and managed by providing an intuitive platform that leverages advanced technologies to enable users to make data-driven design decisions, improve user experiences, and achieve their online goals effortlessly.
                            </article>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Aboutbanner
