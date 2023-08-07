
function Home() {
    return (
        <section className="scroll-smooth flex flex-col text-center items-center bg-darkLight text-light md:flex-row md:px-28 md:text-left" id="home">

            <div className="md:w-1/2 p-4 py-8 space-y-4">
                <h1 className="text-2xl underline"> find the <span className="text-primary font-bold">destiny</span> you are looking for! </h1>
                <h5 className="text-lg"> We will help you to find the best vacation sites!</h5>
                <button className="w-full p-2 border rounded text-primary hover:bg-primary hover:text-dark md:w-1/2"> 
                    <a href="#cities">View more...</a>
                </button>
            </div>

            <div className="md:w-1/2 p-4">
                <img className="rounded-lg homeImg" src="src\assets\bgHome.jpg" alt="Home img" />
            </div>

        </section>
    )
}

export default Home;
