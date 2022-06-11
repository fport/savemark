import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="text-white h-12 py-4 h-auto">
            <div style={{ width: '275px' }}>

                <div className="overflow-y-auto fixed h-screen pr-3" style={{ width: '275px' }}>
                    {/*Logo*/}
                    <Link href='/'>
                        <svg width="150" height="50" className="text-white ml-3 pt8 cursor-pointer" viewBox="0 0 445 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4721 52.3197C16.8802 27.7404 37.5464 9 62.2433 9H153.848C197.146 9 205.105 70.6642 163.226 81.6582V81.6582L123.802 87.9072C118.446 88.7562 113.272 90.5066 108.501 93.0842L84.3842 106.113C50.5591 124.387 10.0491 97.4643 13.7978 59.2017L14.4721 52.3197Z" fill="#FFD365" />
                            <path d="M46.6 68H20.84V64H45.16L49.96 59.92V55.52L45.08 51.04H27.32L20.2 44.64V36.24L27.32 29.92H52.04V33.92H28.84L24.28 37.92V42.96L28.84 47.04H46.68L54.04 53.68V61.84L46.6 68ZM94.2744 67.92V64.64L89.7944 68H68.1144L60.4344 61.6V36.08L68.1144 29.84H89.8744L94.2744 34.32V29.84H98.4344V67.92H94.2744ZM94.2744 40.32L88.4344 34H69.6344L64.7544 38.08V59.68L69.6344 63.68H88.6744L94.2744 59.36V40.32ZM127.029 68H120.869L105.669 50.8V29.76H109.989V49.12L122.709 63.68H125.029L136.869 49.36V29.76H141.109V50.88L127.029 68ZM151.864 49.92V59.52L157.384 63.68H176.504L181.544 59.44L184.424 62.8L177.944 68H156.024L147.544 61.76V36L155.944 29.84H177.944L185.624 36.08V49.92H151.864ZM181.304 38.08L176.504 34H157.384L151.864 38.24V45.84H181.304V38.08Z" fill="#393E46" />
                            <path d="M243.917 68V41.36L238.477 34.08H226.797L222.237 57.04H217.997L213.357 34.08H201.757L196.317 41.36V68H191.997V40L199.677 29.76H216.557L220.077 47.52L223.597 29.76H240.557L248.157 40V68H243.917ZM288.415 67.92V64.64L283.935 68H262.255L254.575 61.6V36.08L262.255 29.84H284.015L288.415 34.32V29.84H292.575V67.92H288.415ZM288.415 40.32L282.575 34H263.775L258.895 38.08V59.68L263.775 63.68H282.815L288.415 59.36V40.32ZM325.329 36.32L322.289 34.08H310.449L304.929 38.16V68H300.609V29.76H304.929V33.52L309.649 29.76H323.729L327.889 32.88L325.329 36.32ZM335.063 68V12.16H339.303V47.6L360.903 33.44V29.6H365.063V35.68L345.063 48.8L365.063 62.24V68H360.903V64.48L341.223 51.44L339.303 52.88V68H335.063Z" fill="white" fillOpacity="0.87" />
                        </svg>
                    </Link>

                    {/* Nav*/}
                    <nav className="mt-5 px-2">
                        <Link href='/'>
                            <a className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:bg-warning">
                                <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
                                </svg>
                                Home
                            </a>
                        </Link>
                        <Link href='/explore'>
                            <a className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:bg-warning">
                                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                                Explore

                            </a>
                        </Link>
                    </nav>
                    {/* User Menu */}
                    <div className="absolute" style={{ bottom: '2rem' }}>
                        <div className="flex-shrink-0 flex hover:bg-warning rounded-full px-4 py-3 mt-12 mr-2">
                            <div className="flex-shrink-0 group block">
                                <div className="dropdown dropdown-top">
                                    <label tabIndex="0" className="btn m-1 bg-accent">
                                        <div className="flex items-center">
                                            <div>
                                                <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg" alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-white leading-5 font-medium  group-hover:text-gray-300 transition ease-in-out duration-150">
                                                    @OsmanAbi
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><Link href='/profile/1232-4124-4123'><a>Profile</a></Link></li>
                                        <li><Link href='/auth/login'><a>Log out</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}