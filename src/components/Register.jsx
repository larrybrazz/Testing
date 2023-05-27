
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [inputDetails, setInputDetails] = useState({
        username: "",
        password: "",
        email:"",
        retypedPassword: "",
        answerOne: "",
        answerTwo: "",
    });
    const navigate = useNavigate()

    const baseUrl = import.meta.env.VITE_BASE_URL
    
// Load parameters 
    async function httpPostRegister(inputdetails) {
         try {
            // const response = await axios
            //   .post(`${baseUrl}/register`,inputdetails)
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });
          const response = await fetch(`${baseUrl}/register`,
                    {
            method: "POST",
            body: JSON.stringify(inputdetails),
            headers: {
                "Content-Type": "application/json",
                // "Authorization":"token"
                }
              })
            return response
        } catch(e) {
            const response = {
             ok:false,
            }
            console.log(response)
            console.error("Error in registration");
        }
       
    
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

    const config = {}

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inputDetails);

      const response = await httpPostRegister(inputDetails);
      console.log(response.status);

      navigate("/login")
    };
    
  return (
    <div className="w-3/5 mx-auto py-8">
      <form onSubmit={handleSubmit} method="POST" action="">
        <div className="space-y-4 my-4">
          <h1 className="font-bold text-2xl">Create an account</h1>
          <p>
            You will need your usrename and password when you sign in online ,
            so make them moderate
          </p>
        </div>

        <div className="space-y-8 my-4">
          <div>
            <h1 className="font-bold">Create username</h1>
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
            <h1 className="font-bold">Create password</h1>
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
          <div>
            <h1 className="font-bold">Retype your password</h1>
            <input
              className="w-full outline-none border border-black"
              type="textgv"
              onChange={handleInputChange}
              placeholder="Retype Password"
              value={inputDetails.retypedPassword}
              name="retypedPassword"
            />
          </div>
        </div>
        <div className="my-4 space-y-8">
          <p className="font-bold text-lg">Security Questions</p>
          <p>
            Answer all thes questions carefully. When you sign into your account
            you will need to spell your answer answers exactly as you enter them
            below
            <br /> If you phone us will ask you these questions. Do not choose
            answers that are likely to be offensive.
          </p>
          <div>
            <h1 className="font-bold">Question 1</h1>
            <select className="border border-black" name="" id="">
              <option value="">Please select a question</option>
              <option value="">Please select a question</option>
              <option value="">Please select a question</option>
              <option value="">Please select a question</option>
            </select>
          </div>
          <div>
            <h1 className="text-bold"> Answer 1</h1>
            <input
              className="w-full outline-none border border-black"
              type="text"
              onChange={handleInputChange}
              placeholder="Answer 1"
              value={inputDetails.answerOne}
              name="answerOne"
            />
          </div>
          <div>
            <h1 className="font-bold">Question 2</h1>
            <select className="border border-black" name="" id="">
              <option value="">Please select a question</option>
              <option value="">Please select a question</option>
              <option value="">Please select a question</option>
              <option value="">Please select a question</option>
            </select>
          </div>
          <div>
            <h1 className="text-bold"> Answer 2</h1>
            <input
              className="w-full outline-none border border-black"
              type="text"
              onChange={handleInputChange}
              placeholder="Answer 2"
              value={inputDetails.answerTwo}
              name="answerTwo"
            />
          </div>
        </div>
          <button className="bg-green-500 p-2 rounded-md" >
            {" "}
            Continue
          </button>
      </form>
    </div>
  );
};

export default Register;
