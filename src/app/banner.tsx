export default function Banner() {
    return (
        <>
            <section className="vh">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-20 lg:py-24 xl:py-32 lg:flex lg:items-center"
                >
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Define Design <br /> Streamline Production
                            <br />
                            <strong className="font-extrabold text-blue-600 sm:block">
                                Echo Dash
                            </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">
                            Headless CMS that focuses on defining the User Experience. Protect the integrity of your product through all stages of production.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-400 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                target="_blank"
                            >
                                Free Trial
                            </a>

                            <a
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-500 shadow hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                                href="/about"
                            >
                                Request Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}