export default function Banner() {
    return (
        <>
            <section className="vh">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:py-40 xl:py-52 lg:flex lg:items-center"
                >
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Custom Websites. <br />
                            <strong className="font-extrabold text-blue-600 sm:block">
                                Your Mission's Catalyst.
                            </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">
                            To foster an empowering relationship. Finding your business a working and ongoing solution. We are Echo Web, LLC.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-400 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="https://ixqu3aocu0m.typeform.com/to/WpcyelXK"
                                target="_blank"
                            >
                                Get Started
                            </a>

                            <a
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-500 shadow hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                                href="/about"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}