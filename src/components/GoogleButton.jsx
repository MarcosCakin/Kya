const GoogleButton = () => {
  return (
    <button type="submit" className="flex items-center justify-center space-x-2 bg-dark text-primary rounded-xl
     p-2 w-full  border border-primary font-bold hover:bg-primary hover:text-dark">
        <img src="/googleI.png" className="w-[22px]" />
        <p> Sing up with google! </p>
    </button>
  )
}
export default GoogleButton