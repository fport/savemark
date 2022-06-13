import useSWR from "swr";
import Card from './components/card'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Bookmarks() {
    const { bookmarks, isLoading, isError } = useGetData()

    if (isError) return <div>Error fetching data</div>
    if (isLoading) return <div>Loading...</div>

    const mergedBookmarks = bookmarks && bookmarks.reduce((prev, curr) => {
        let arr = []

        curr.bookmarks.map((bm) => {
            prev.push(bm)
        })
        const newArr = [...prev, ...arr]

        return newArr
    }, [])

    return (
        <section className="w-full border border-y-0 border-gray-800 mb-10" style={{ maxWidth: '600px' }}>
            <aside>
                <div className="flex">
                    <div className="flex-1 mx-2">
                        <h2 className="px-4 py-2 text-xl font-semibold text-white">Home</h2>
                    </div>
                </div>
            </aside>
            <ul className="list-none">
                {
                    mergedBookmarks && mergedBookmarks.map((data, i) => (
                        <Card data={data} key={i} />
                    ))
                }
            </ul>
        </section>
    )
}

function useGetData() {
    const { data, isLoading, isError } = useSWR(`/api/bookmark`, fetcher)
    return {
        bookmarks: data,
        isLoading: isLoading,
        isError: isError
    }
}
