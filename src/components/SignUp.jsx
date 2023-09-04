const SingUp = () => {
    return (
      <div className="flex flex-col justify-center items-center text-light bg-darkLight h-[79.5vh]">

        <div className="flex justify-center items-center p-4 border border-light space-x-2">

          <div className="invisible md:visible">
            <img className="rounded-lg min-h-[350px]" src="https://images.cdn1.buscalibre.com/fit-in/360x360/1b/9d/1b9d4392109c310b46368596534d6f5b.jpg" />
          </div>

          <div className="flex flex-col items-center space-y-6">

            <h2 className="text-3xl font-bold text-primary underline">Register!</h2>

            <form className="flex flex-col space-y-6 text-md text-dark"  role="form" method="get">

            <div>
                <label for="email"/>
                <input className="px-3 py-1 rounded-xl bg-dark" type="email" name="email" id="email" placeholder="E-mail..." required />
            </div>

            <div>
              <label for="password" />
              <input className="px-3 py-1 rounded-xl bg-dark" type="password" name="password" id="password" placeholder="Password..." required />
            </div>

            <div>
                <label for="country"/>
                <input className="px-3 py-1 rounded-xl bg-dark" type="text" name="Country" id="Country" placeholder="Country..." required />
            </div>
              
            <button className="bg-dark text-light rounded-xl p-1 font-bold hover:bg-primary hover:text-dark">
                Register
            </button>

            </form>
          </div>

        </div>
      </div>  
    )
  }
  
  export default SingUp;