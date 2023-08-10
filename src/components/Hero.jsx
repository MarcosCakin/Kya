import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="scroll-smooth flex flex-col items-center text-left space-y-8 py-4 bg-darkLight text-light md:flex-row md:justify-between md:px-16">
        <div className="space-y-8 flex flex-col items-center md:w-1/2">
          <h1 className="text-primary font-bold text-center text-4xl">
            MyTinerar<span className="text-light font-extrabold">y</span>
          </h1>
          <h5 className="text-2xl text-left p-2">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </h5>
          <button className="font-bold space-x-12 w-11/12 p-2 border border-primary text-primary duration-500 rounded sm:space-x-4 md:self-start md:w-1/2 hover:border-l-[50px] hover:border-light hover:text-light">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <a href="/cities">View more...</a>
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            className="rounded-full p-4 homeImg"
            src="src\assets\bgHome.png"
            alt="Home img"
          />
        </div>
    </div>
  )
}
export default Hero;