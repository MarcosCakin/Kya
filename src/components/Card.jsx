export const Card = ({city, description, country, image}) => {
    return (
        <div className="border border-light-2 w-[480px] h-[450px] hover:shadow-lg my-4 hover:opacity-50 hover:border-primary">
            <div className="flex-col h-2/3">
                    <img
                        alt="city image"
                        src={image}
                        className="object-cover w-full h-full"
                    />                
            </div>
            <div className="h-1/3 space-y-1">
                    <h3 className="text-2xl font-bold underline">
                        {city}, {country}
                    </h3>
                    <p className="text-sm">
                        {description}
                    </p>
            </div>
        </div>
    )
}