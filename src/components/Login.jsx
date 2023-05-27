import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
   const [inputDetails, setInputDetails] = useState({
     username: "",
     password: "",
     email: "",
   });
    const navigate = useNavigate()
    
    const baseUrl = import.meta.env.VITE_BASE_URL;
    
    const httpPostLogin = async (inputdetails) => {
        const response = await axios.post(`${baseUrl}/login`, inputdetails)
            .then((response) => console.log(response))
        .catch((error)=> console.log(error))
    }
    
      const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setInputDetails((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inputDetails);

      const response = await httpPostLogin(inputDetails);
        console.log(response.status);
      
        navigate("/")
        alert("Working")
    };
    
  return (
    <div className='w-3/5 mx-auto'>
      <form onSubmit={handleSubmit} method="POST" >
        <div className="space-y-4 my-4">
          <h1 className="font-bold text-2xl">Login</h1>
          <p>
            You will need your usrename and password when you sign in online ,
            so make them moderate
          </p>
        </div>

        <div className="space-y-8 my-4">
          <div>
            <h1 className="font-bold">Username</h1>
            <p className="text-sm text-zinc-300">
              Must contain atleast 6 characters and no more than 30. Letters and
              numbers only
            </p>
            <input
              className="w-full outline-none border border-black"
              type="text"
              onChange={handleInputChange}
              placeholder="Username"
              value={inputDetails.username}
              name="username"
            />
          </div>
          <div>
            <h1 className="font-bold">Email</h1>
            <p className="text-sm text-zinc-300">
              Must contain atleast 6 characters and no more than 30. Letters and
              numbers only
            </p>
            <input
              className="w-full outline-none border border-black"
              type="email"
              onChange={handleInputChange}
              placeholder="Email"
              value={inputDetails.email}
              name="email"
            />
          </div>
          <div>
            <h1 className="font-bold">Password</h1>
            <p className="text-sm text-zinc-300">
              Must contain atleast 8 characters with atleast 1 capital letter.,
              1 lower case letter and 1 number. Do not use your username, a
              common word like "password " or sequence like "123"
            </p>
            <input
              className="w-full outline-none border border-black"
              type="text"
              onChange={handleInputChange}
              placeholder="Password"
              value={inputDetails.password}
              name="password"
            />
          </div>
        </div>
        <button className="bg-green-500 p-2 rounded-md" type="submit">
          {" "}
          Login
        </button>
      </form>
    </div>
  );
}

export default Login