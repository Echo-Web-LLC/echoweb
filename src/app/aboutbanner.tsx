const Aboutbanner = () => {
    return (
        <div>
            <section>
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        >
                            <img
                                alt="Party"
                                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl text-gray-800 font-bold sm:text-4xl">Our Mission</h2>
                            <h3 className="text-2xl text-gray-700 font-semibold sm:text-3xl">
                                Why $100 Per Page
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Quality is a standard for Echo Web, LLC. We always keep our clients best interest in mind and put our best foot forward. The reason for having a such a flexible and low price model lies in our vision and mission. <strong> We are not just a full-stack web solution, at the core we are problem solvers. </strong>
                                <br />
                                <br />
                                We know the design and development process can always improve for both clients and agencies. Diving into this process will help bootstrap our business and also equip our business with the right information, data, and knowledge to succeed in our mission.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const getStaticProps = async (context) => {
    return {
        props: {}
    }
}

export default Aboutbanner
