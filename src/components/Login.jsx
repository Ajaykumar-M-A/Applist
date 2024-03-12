import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const Login = () => {
    const[inputField,setInputField]=useState(
        {
            "Gmail":"",
            "Password":""
        }
    )
    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(inputField)
        if (inputField.Gmail=="admin@gmail.com"&&inputField.Password=="12345")
        navigate("/add")
        else{
            alert("Invalid credentials")
        }
    }
    const navigate=useNavigate()
  return (
    <div>



<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-11">

            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 colp-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Gmail</label>
                    <input type="text" className="form-control " name='Gmail' value={inputField.Gmail} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 colp-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="password" name="Password" id="" className="form-control" value={inputField.Password} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 colp-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success"   onClick={readValue}>Login</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Login