// we define two variables, one holding data, and one holding a value if the promise
//was resolved
let myData = {};
let promise = {};
// our React component which will be rendered inside Suspense boundaries
const SuspenseComponent = ({ value }) => {
    //our method which will be fired when we call the component
    const waitForData = () => {
        //if data already there, we return it and render is done, if not the Spinner is spinning
        if (myData[value] !== undefined) return myData[value];
        // an array to remember already computed values
        if (!promise[value])
            promise[value] = fetch(
                "https://jsonplaceholder.typicode.com/todos/" + `${value}`
            )
                .then((res) => res.json())
                .then((d) => (myData[value] = d));
        // we can also throw a new Promise with rejection like below
        // throw new Promise((undefined,rej)=>rej())
        throw promise[value];
    };

    const data = waitForData();
    // we fill in what is returned from the typicode API, if no data returned we display
    // a fixed message
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
    );
};