const SingUp = () => {

    return (
      <div className="flex flex-col justify-center items-center text-light bg-darkLight min-h-[71vh]">

        <div className="flex justify-center items-center m-4 p-4 rounded-xl bg-dark space-x-2">

          <div>
            <img className="border-r mr-6" src='public\travelTime.png' />
          </div>

          <div className="flex flex-col items-center space-y-6">

            <h2 className="text-3xl font-bold text-primary underline">Sign up!</h2>

            <form className="flex flex-col space-y-6 text-md text-light"  role="form" method="get">

            <div>
              <label for="name" />
              <input className="px-3 py-1 w-full rounded-xl bg-dark border-b" type="text" name="name" id="name" placeholder="First name..." required />
            </div>

            <div>
              <label for="lastName" />
              <input className="px-3 py-1 w-full rounded-xl bg-dark border-b" type="text" name="lastName" id="lastName" placeholder="Last name..." required />
            </div>

            <div>
                <label for="email"/>
                <input className="px-3 py-1 w-full rounded-xl bg-dark border-b" type="email" name="email" id="email" placeholder="E-mail..." required />
            </div>

            <div>
              <label for="password" />
              <input className="px-3 py-1 rounded-xl bg-dark border-b" type="password" name="password" id="password" placeholder="Password..." required />
            </div>

            <div>
              <label for="avatar" />
              <input className="rounded-xl border-b" type="file" name="avatar" id="avatar" accept=".jpg, .jpeg, .png" />
            </div>

            <div>
                <label for="country" />
                <input className="px-3 py-1 w-full rounded-xl bg-dark border-b" type="select" name="country" id="country" required >
                  
                </input>                
            </div>
              
            <button className="bg-dark text-primary rounded-xl p-1 font-bold border border-primary hover:bg-primary hover:text-dark">
                Sign up!
            </button>

            </form>
          </div>

        </div>
      </div>  
    )
  }
  
  export default SingUp;