
const Card = ({text,desc}) => {
  return (
    <div className="w-56 py-9 shadow-lg items-center">
        <div>
            <div className="m-2 w-full ">
                <img className="object-cover bg-no-repeat" src="https://edusuitepk.b-cdn.net/wp-content/uploads/elementor/thumbs/Admission-System-pfabln1tgjxbjfk7fkinki15pwbbzulomvclw69h9c.jpg"></img>
            </div>
            <div className="text-2xl">
            {text}

            </div>
            <div className="font-medium">
           {desc}
            </div>
            <div>
                Learn More
            </div>

        </div>
    </div>
  )
}

export default Card