import Hero from '../components/Hero';
import Carousel from '../components/carousel';
function Home() {


  return (
    <section id="home" className="space-y-4 bg-darkLight">
      <Hero />
      <h2 className="text-light text-center text-2xl font-bold underline pt-4">Popular Mytineraries</h2>
      <Carousel />
    </section>
  );
}

export default Home;