import React from "react"
import Title from "../../Component/Title"
import DoneButton from "../../Component/DoneButton"
import { useNavigate } from "react-router-dom"

const Setting = () => {

    const Navigate = useNavigate();

    const onDone= ()=>{
Navigate('/MainPage');
    }

    return (
        <div>

            <Title />
            <div className="flex justify-between items-center p-3 mt-4 ">
                <div className="flex flex-col ">
                    <p className="font-bold">User account</p>
                    <p className="font-normal" style={{ color: '#4B5563' }}>Suraj.singh@bandoor.com</p>
                </div>
                <button className="h-[40px] w-[88px] border-2
                 border-gray-400 rounded-xl font-bold" 
                 style={{ color: '#4B5563' }}
                 onClick={onDone}>
                    Sign out
                </button>

            </div>
            <hr className="border border-gray-400 m-4"></hr>
            <div className="fixed bottom-4 left-0 
            right-0 flex justify-center"
            onClick={onDone}>
                <DoneButton />
            </div>
        </div>
    )

}

export default Setting