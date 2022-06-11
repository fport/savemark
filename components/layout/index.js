import Navbar from '../navbar'

export default function Layout({ children }) {
    return (
        <div className="p-relative min-h-screen	h-full" style={{ backgroundColor: '#222831' }}>
            <div className="flex justify-center">
                <div className="p-relative min-h-screen	h-full" style={{ backgroundColor: '#222831' }}>
                    <div className="flex justify-center">
                        <Navbar />
                        <main role="main">
                            <div className="flex" style={{ width: '990px' }}>
                                <section className="w-3/5 border border-y-0 border-gray-800" style={{ maxWidth: '600px' }}>
                                    {children}
                                </section>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}
