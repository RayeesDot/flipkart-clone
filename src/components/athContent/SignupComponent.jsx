import React, { useState } from 'react'
import axios from 'axios';

const SignupComponent = () => {

  const [data,setData]= useState({
    email:'',
    password:''
  })

  const [isEmailEntered, setIsEmailEntered] = useState(false)

  const handleForm =(e)=>{
      e.preventDefault()
   setData({
    ...data,
    [e.target.name] : e.target.value
   } )
  }

  const handleEmailSubmit = () => {
    if (data.email) {
      setIsEmailEntered(true)
    } else {
      alert("Please enter your email.")
    }
  }

  const postData = async()=>{
   try {
    await axios.post('https://myflipkartdbjson.onrender.com/users',{
      email:data.email,
      password:data.password
      })
      alert("sign up successful")
   } catch (error) {
    console.log("error is : " , error)
    alert("There was an error during signup.")
   }
  }
  return (

    <div>
       <div className="input-container">
                            { isEmailEntered ? (<>
                            <input className="border-0 l-100 outline-none border-bottom" type="text" id="Password" name='password' placeholder=" " value={data.password} onChange={handleForm} />
                            <label className="dim-color position-abs" htmlFor="Password">Enter Password</label>
                            </>)
                            :
                            ( <>
                            <input className="border-0 l-100 outline-none border-bottom" type="text" id="Email" name='email' placeholder=" " value={data.email} onChange={handleForm} />
                            <label className="dim-color position-abs" htmlFor="Email">Enter Email/Mobile number</label> 
                            </> 
                            )}
                            <p className="mt-4 font-size-1">By continuing, you agree to Flipkart's <a className="text-decoration-none" href="#kk">Terms of Use</a> and <a className="text-decoration-none" href="#kk">Privacy Policy</a>.</p>
                         { isEmailEntered ? (
                               <button className="text-white bg-orange border-0 w-100 pad-cus-2" onClick={postData} >submit</button>
                          ):( <button className="text-white bg-orange border-0 w-100 pad-cus-2" onClick={handleEmailSubmit} >Enter email for Sign up</button>
                        ) }
                        </div>
                        {/* <h1>login</h1> */}
    </div>


  )
}

export default SignupComponent
