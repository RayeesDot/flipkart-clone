import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 

const LoginComponent = () => {
   
    const navigate =useNavigate()
  const [data, setData] = useState({
    email: "",
    password: ""
});

const [user, setUser] = useState({})




const handleForm = (e) => {
    e.preventDefault()
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}

const handleEmailLogin = async () => {
    console.log(data.email)
    try {
        // Make a request to your backend to check the email
        // debugger
        const response = await fetch('https://myflipkartdbjson.onrender.com/users?email=' + data.email);
        const userData = await response.json();
        if (userData.length === 0) {
            // Email not found
            console.log("Email not found");
            alert("email not found")
            return;
        }

        else {
            setUser(userData[0])
            
            //  Reset the form fields to empty values after clicking
            setData({
                ...data,
                email: "",
            });
        }


    } catch (error) {
        console.error("An error occurred:", error);
    }
}

const handlePassLogin = () => {
    // Email found, compare password
    // Assuming your user data structure has a password field
    // const user = userData[0]; // Assuming there's only one user with this email
    if (user.password === data.password) {
        // Password matches
        console.log("Login successful!");
        alert("login sucessful")
   
        navigate('/')
        //  Reset the form fields to empty values after clicking
        setData({
            ...data,
            password: ''
        })
    } else {
        // Password doesn't match
        console.log("Incorrect password");
        alert("Incorrect password");
    }
}



  return (
    <div>
       <div className="input-container">
                            { user.email ? (<>
                            <input className="border-0 l-100 outline-none border-bottom" type="password" id="Password" name='password' placeholder=" " value={data.password} onChange={handleForm} />
                            <label className="dim-color position-abs" htmlFor="Password">Enter Password</label>
                            </>)
                            :
                            ( <>
                            <input className="border-0 l-100 outline-none border-bottom" type="text" id="Email" name='email' placeholder=" " value={data.email} onChange={handleForm} />
                            <label className="dim-color position-abs" htmlFor="Email">Enter Email/Mobile number</label> 
                            </> 
                            )}
                            <p className="mt-4 font-size-1">By continuing, you agree to Flipkart's <a className="text-decoration-none" href="#kk">Terms of Use</a> and <a className="text-decoration-none" href="#kk">Privacy Policy</a>.</p>
                         { user.email ? (
                               <button className="text-white bg-orange border-0 w-100 pad-cus-2" onClick={handlePassLogin}>login</button>
                          ):( <button className="text-white bg-orange border-0 w-100 pad-cus-2" onClick={handleEmailLogin}>Enter email for login</button>
                        ) }
                        </div>
                       
    </div>
  )
}

export default LoginComponent
