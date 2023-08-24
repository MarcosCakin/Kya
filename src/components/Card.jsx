export const Card = ({city, country, image}) => {
    return (
        <div className="border border-dark rounded-xl w-[480px] h-[450px] my-4 cursor-default cardShadow">

            <div className="h-2/3 border-b border-dark">
                    <img
                        alt="city image"
                        src={image}
                        className="object-cover w-full h-full rounded-t-xl"
                    />                
            </div>

            <div className="h-1/3 flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-extrabold">
                        {city},
                        <span className="text-lg font-thin italic"> {country}</span>
                    </h2>
                    <button className="border w-3/4 px-1 mt-4 rounded-md hover:border-primary hover:text-primary hover:duration-300">
                        view more
                    </button>
            </div>
        </div>
    )
}