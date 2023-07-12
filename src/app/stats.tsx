const Stats = () => {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-left">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
                            About The Users
                        </h2>

                        <ul className="mt-4 list-disc text-gray-500 sm:text-xl">
                            Currently Echo Dash is targeting any group or individual who wants to structure a good product experience:
                            <li>
                                Companies who depend on contractors or interns more and wish to standardize production requirements for all current and upcoming contractors
                            </li>
                            <li>
                                Managers who have to manage large amount of content changes and revisions
                            </li>
                            <li>
                                Freelancers who wants to create a powerful and fast feedback loop for their products
                            </li>
                            <li>
                                Startups that needs to maintain product design integrity through out development
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Community Members
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                    4
                                </dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    API Calls
                                    <br />
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl"> NaN </dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Dash Installed
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">1</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stats
