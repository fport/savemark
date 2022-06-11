// import { fetcher } from '../../lib'
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Login({ users }) {
    const { user, isLoading, isError } = getData()
    console.log(user);
    if (isError) return <div>Error fetching data</div>
    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            asd
        </div>
    )
}

function getData() {
    const { data, error } = useSWR('http://localhost:3000/api/users', fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}
