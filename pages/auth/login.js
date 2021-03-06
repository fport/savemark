import { useRouter } from 'next/router'
import Seo from '@c/seo';
import Link from 'next/link'

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userAction";
import { useEffect } from 'react';


export default function Login() {
    const router = useRouter()
    const dispatch = useDispatch();
    const userInfoData = useSelector((state) => state.userInfo);
    const { userInfo } = userInfoData;

    const redirect = (e) => {
        e.preventDefault()
        dispatch(login({
            email: 'osman@gmail.com',
            password: '123456'
        }));
    }

    useEffect(() => {
        console.log('render');
        if (userInfo?.email && router?.route == '/auth/login') {
            router.push('/auth/login')
        }

        if (userInfo?.email) {
            router.push('/')
        }

    }, [userInfo])

    return (
        <>
            <Seo title="Login" />
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card bg-warning shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                        <div className="card bg-warning-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Log In
                            </label>
                            <form onSubmit={(e) => redirect(e)} className="mt-10">
                                <div>
                                    <input type="email" placeholder="Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className="mt-7">
                                    <input type="password" placeholder="Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className="mt-7">
                                    <button className="bg-neutral w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Login
                                    </button>
                                </div>
                                <div className="mt-7">
                                    <div className="flex justify-center items-center">
                                        <label className="mr-2">Do not you have an account yet?</label>
                                        <Link href='/auth/register'>
                                            <a className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                                Sign Up
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
