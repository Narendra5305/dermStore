import React , {useState } from "react";

import "./pagesCss/signin.css"
import { useNavigate } from "react-router";
import axios from "axios";

import mediCareStoreLogo from '../assets/mediCareStoreLogo.png';





const Signin  = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const navigate = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://demstorebackend.onrender.com/users/signin", {email ,password});
          const token = response.data.token
          localStorage.setItem("token", token); 
          setEmail("")
          setPassword("")
          navigate("/")
          alert("User login successfully!");
        } catch (error) {
          console.error("Error signin user:", error.response?.data || error.message);
          alert("Failed to signin user.");
        }
    };


    return(
        <div className="signin">
            <div className="signin-child">
                <div className="signin-child-cont-1">
                    <div className="signin-child-cont-1-child">
                        
                        <img src={mediCareStoreLogo} alt="image-logo" />
                        
                        

                        <form className="singin-form" onSubmit={handleSubmit}>
                            <label >Email Address*</label>
                            <input type="email" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)} required/>

                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <button type="submit">SIGN IN</button>

                            
                        </form>

                        <div className="signUp-link">
                            <a onClick={()=>navigate("/signup")}>New Here? Sign up today!</a>
                        </div>

                    </div>
                </div>

                <div className="signin-child-cont-2">
                    <img src="https://www.dermstore.com/images?url=https://static.thcdn.com/design-assets/dermstore/components/Account%20Image/modelshottest.jpg&format=webp&auto=avif&width=1920&crop=1920,1120,smart" alt="sigin-image" />
                </div>
            </div>
        </div>
    )
}


export default Signin ;