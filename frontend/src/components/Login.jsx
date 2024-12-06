import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const loginUser=async()=>{

    const data=await axios.post("http://localhost:3000/admin/login",{
      username,password
    })
    navigate("/dashboard")

    console.log(data)

  }


    return (
      <div>
        <div className="mx-auto m-14 w-3/5 bg-blue-950 p-6 rounded-xl">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button className="rounded-xl px-5 py-2 bg-yellow-600 text-white">Sign in</button>
            <Link to="/register">
            <button className="rounded-xl px-5 py-2 bg-yellow-600 text-white">Register</button>
            </Link>
           
          </div>
  
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-white">Welcome</h1>
            <p className="text-white">Please Login to your account!!</p>
          </div>
  
          <div className="mx-32 bg-blue-950">
            <div className="mb-4">
              <p className="text-lg text-white">Username or Email</p>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-3 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                value={username}
                onChange={(e)=>(setUsername(e.target.value))}


              />
            </div>
  
            <div className="mb-4">
              <p className="text-lg text-white">Password</p>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                value={password}
                onChange={(e)=>(setPassword(e.target.value))}
              />
            </div>
  
            <button className="w-full py-3 mt-6 bg-yellow-600 text-white rounded-xl" onClick={loginUser}>
              Confirm
            </button>
          
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  