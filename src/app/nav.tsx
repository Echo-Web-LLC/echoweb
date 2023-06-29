import Image from 'next/image';
import logoecho from './images/echologowhiteback.png';
import externallinksvg from './images/noun-new-tab-1483687.svg';

export default function Nav() {
    return (
        <>
            <header className="bg-white">
                <div
                    className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
                >
                    <a className="block text-blue-500" href="/">
                        <span className="sr-only">Home</span>
                        <Image
                            src={logoecho}
                            alt="logo"
                            className='w-32'
                        />
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/about">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/process">
                                        Our Process
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/team">
                                        Team
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/services">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/works">
                                        Works
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75 flex align-bottom" target="_blank" href="/blogs">
                                        Blogs
                                        <svg width="12px" height="12px" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className='opacity-50 mt-1 ml-1'>
                                            <g>
                                                <path d="m1e3 600v400h-799.99v-799.99h400v-80.004h-400c-43.992 0-80.004 36-80.004 80.004v800c0 43.98 36.012 79.992 80.004 79.992h799.99c43.992 0 80.004-36.012 80.004-80.004v-400z" />
                                                <path d="m1080 440-0.035156-280.02c0.035156-22.07-17.895-39.984-39.961-39.984h-280.01v79.98h183.39l-343.39 343.44 56.566 56.578 343.43-343.38v183.37h80.004z" />
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                                    href="/"
                                >
                                    Contact
                                </a>
                            </div>

                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}