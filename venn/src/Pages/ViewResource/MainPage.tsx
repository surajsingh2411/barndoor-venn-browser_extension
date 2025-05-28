import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faUpRightAndDownLeftFromCenter,faXmark,faLink,faGear, faEllipsisVertical,faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';
import Connections from "../../Component/Connection";
import Chat from "../chat/Chat";
import Title from "../../Component/Title";





const MainPage = () => {

    const [ShowTab, SetTab] = useState(false);



    return (
        <div className="flex flex-col h-[100vh]">

            <Title/>
            <Connections />
            <Chat />





            {/* <div className="flex items-center justify-start gap-3 mt-6 ml-5 insert border-b w-[90vw]">
                <div onClick={()=>{
                    SetTab("Resource")
                }}>
                     <span className = {`text-gray-500 cursor-default ${
                        ShowTab === "Resource"? 'text-stone-950 font-bold underline underline-offset-6' : ''
                    }`}>Resources</span>
                </div>
                <div onClick={()=>{
                    SetTab("Actions")
                }}>
                   <span className = {`text-gray-500 cursor-default ${
                        ShowTab === "Actions" ? 'text-stone-950 font-bold underline underline-offset-6' : ''
                    }`}>Actions</span>
                </div>
                <div onClick={()=>{
                    SetTab("Chat")
                }}>
                    <span className = {`text-gray-500 cursor-default ${
                        ShowTab === "Chat" ? 'text-stone-950 font-bold underline underline-offset-6' : ''
                    }`}>Chats</span>
                </div>
            </div>

            

            { !(ShowTab === "Chat") &&  (<Search />)}

            {ShowTab === "Chat" && (
                <Chat/>
            )} */}

        </div>
    )
}


export default MainPage;