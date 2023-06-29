const Stats = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Aligned Missions
                        </h2>

                        <p className="mt-4 text-gray-500 sm:text-xl">
                            We deliver more than a website. We come through with a no strings attached life long partnership. Things happen and contracts end, but we will always have your best interest. The people we mutually elect to do business with means more than offering a solution, <a title="Our Process" target="_blank" className=" text-blue-500 underline font-black italic" href="/about"> we genuinely support your cause! <svg width="12px" height="12px" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className='opacity-50 mb-1 ml-1 inline-block'>
                                <g>
                                    <path d="m1e3 600v400h-799.99v-799.99h400v-80.004h-400c-43.992 0-80.004 36-80.004 80.004v800c0 43.98 36.012 79.992 80.004 79.992h799.99c43.992 0 80.004-36.012 80.004-80.004v-400z" />
                                    <path d="m1080 440-0.035156-280.02c0.035156-22.07-17.895-39.984-39.961-39.984h-280.01v79.98h183.39l-343.39 343.44 56.566 56.578 343.43-343.38v183.37h80.004z" />
                                </g>
                            </svg>
                            </a>
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Websites Delivered
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                    3
                                </dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Avg. Cost Per Page
                                    {/* Change to total Conversation Rate when more data */}
                                    <br />
                                    <span className="text-sm">(For Brochure Site & Not Including Maintenance)</span>
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl"> $100 </dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Avg. Yearly Savings
                                    {/* change to how much value each company recieves from website after more data */}
                                    <br />
                                    <span className="text-sm">(Compared to CMS or Website Builders)</span>
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$250+</dd>
                            </div>
                        </dl>
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

export default Stats
