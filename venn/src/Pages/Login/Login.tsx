import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSkull } from "@fortawesome/free-solid-svg-icons"
import Title from "../../Component/Title"


const Login = () => {
    const Navigate =useNavigate();

    const buttonclick = ()=>{
        Navigate("/MainPage")
    }

    return (
        <div className="">
        <div className="">
            <Title />
        </div>
    
        <div className="flex flex-col justify-center items-center pt-20  overflow-hidden ">
            <h1 className=" font-bold flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faSkull} /> 
            <p>Venn</p>
            </h1>
            <div className="flex items-center justify-center text-center px-4 mt-3">
                <p className="text-sm leading-5">
                    Sign in to barndoor to add and <br/> manage connected account
                </p>
            </div>
    
            <button
                className="w-[240px] h-[40px] border rounded-md text-white mt-3 font-semibold"
                style={{ background: '#111827' }}
                onClick={buttonclick}
            >
                login with barndoor
            </button>
        </div>

     <div className="mt-80">
     <p className="text-center " style={{color:'#9CA3AF'}}>Powered by Bandoor.ai</p>
     </div>
    </div>
    

    )
}


export default Login