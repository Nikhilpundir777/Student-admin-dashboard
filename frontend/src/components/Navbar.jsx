

const Navbar = () => {
  return (
    <div className="py-6 shadow-xl mx-32">
        <div className="flex w-full gap-52 items-center">
            <div className="mx-6">
            <h1 className="text-2xl text-blue-950">EdManager</h1>
            </div>
            <div className="flex items-center justify-between gap-14">
                <h2>Home</h2>
                <h2>Features</h2>
                <h2>Services</h2>
                <h2>Contact</h2>
                <h2>
                    <button className="rounded-md p-3 bg-yellow-600 text-white">Sign in</button>
                </h2>
            </div>

        </div>
    </div>
  )
}

export default Navbar