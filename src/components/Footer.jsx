const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center space-y-4 py-2 bg-dark text-light bottom-0 md:flex-row md:justify-around md:items-center md:space-y-0">

        <div className="flex items-center font-bold border-b pb-2 border-light md:border-none md:pb-0">
          <a href="/home">
            <img src="/logo.png" className='h-10 mr-4'/>
          </a>
          <a href="#" className="hover:underline hover:text-primary">
            My Tinerary © 2023
          </a>
        </div>

        <a href="#" className="hover:underline">
          Terms & conditions
        </a>

      </div>
    </footer>
  )
}

export default Footer