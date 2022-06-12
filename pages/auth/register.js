import { useRouter } from 'next/router'
import Seo from '@c/seo';

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/userAction";
import { useEffect } from 'react';

export default function Register() {
    const router = useRouter()
    const dispatch = useDispatch();
    const userInfoData = useSelector((state) => state.userInfo);
    const { userInfo } = userInfoData;
    const redirect = (e) => {
        e.preventDefault()
        router.push('/')
    }
    const submitRegister = (e) => {
        e.preventDefault();
        dispatch(register({
            name: 'osman',
            email: 'osman@gmail.com',
            password: '123456'
        }));

    }

    useEffect(() => {
        if (userInfo?.email) {
            router.push('/')
        }
        console.log('user', userInfo);
    }, [userInfo])

    return (
        <>
            <Seo title="Register" />
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card bg-secondary-content shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                        <div className="card bg-secondary shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Log In
                            </label>
                            <form onSubmit={(e) => submitRegister(e)} className="mt-10">
                                <div>
                                    <input type="email" placeholder="Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className="mt-7">
                                    <input type="password" placeholder="Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className="mt-7">
                                    <button className="bg-secondary-content w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Register
                                    </button>
                                </div>
                                <div className="mt-7">
                                    <div className="flex justify-center items-center">
                                        <label className="mr-2">Do not you have an account yet?</label>
                                        <a className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Sign Up
                                        </a>
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