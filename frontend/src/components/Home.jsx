import Card from "./Card"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div>
        <Navbar />

        <div className="hero mx-auto w-3/4 bg-black">
        <h1 className="text-3xl text-white mx-24 py-32">Student Management System
        <span className="text-[1.3rem]"><p className="text-white my-12">Boost Performance of Your Academy with Student Management System</p></span>
        <button className="rounded-xl p-5 bg-yellow-600">
            Learn More
        </button>
        </h1>
       
        
        
        </div>
        <div className="features mx-auto w-3/4 bg-black text-center text-white">
        <h2 className="text-center">Key Features</h2>
        <p>The student management system is the hurdle less way to manage all your academic student’s information easily and securely. From keeping track records of students to knowing the performance, everything becomes one click away with student information system software.</p>
            
        </div>

    <div className="Services mx-auto w-3/4">
        <h1 className="text-center text-2xl font-semibold">Our Best Services</h1>

        <div className="Cards flex gap-9">

            <Card text={"Admission System"} desc={"Edusuite admission system brings you an easy and secure solution for account management. This software system provides various functions."}/>
            <Card text={"Examination System"} desc={"Edusuite admission system brings you an easy and secure solution for account management. This software system provides various functions."}/>
            <Card text={"Transportation System"} desc={"Edusuite admission system brings you an easy and secure solution for account management. This software system provides various functions."}/>
            <Card text={"Administration System"} desc={"Edusuite admission system brings you an easy and secure solution for account management. This software system provides various functions."}/>
            


        </div>
        

    </div>


        
     </div>
  )
}

export default Home