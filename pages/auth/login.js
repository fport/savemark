// import { fetcher } from '../../lib'
import useSWR from "swr";
import { useRouter } from 'next/router'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Login() {
    const router = useRouter()
    const { user, isLoading, isError } = useGetData()
    if (isError) return <div>Error fetching data</div>
    if (isLoading) return <div>Loading...</div>

    const redirect = (e) => {
        e.preventDefault()
        router.push('/')
    }

    return (
        <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-secondary-content shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                    <div className="card bg-secondary shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
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
                                <button className="bg-secondary-content w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
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
    )
}

function useGetData() {
    const { data, error } = useSWR(`http://${process.env.BACKEND_PORT}/api/users`, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}
