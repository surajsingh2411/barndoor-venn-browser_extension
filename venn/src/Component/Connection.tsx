import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faGoogleDrive, faGooglePay, faGooglePlay, faSalesforce, faSlack } from "@fortawesome/free-brands-svg-icons"

const Connections = () => {

    return (
        <div className="flex justify-between p-5 items-center" >

            <div className="flex justify-between ">
                <div>
                    <span className="" style={{ color: '#4B5563' }}>Select services :</span>
                </div>
            </div>

            <div className="flex gap-0.5 h-[40px] mr-3" style={{background:'#E5E7EB'}}>
                <span className="flex justify-between  items-center  rounded-sm m-0.5" style={{ background: '#FFFFFF' }}>
                    <div className="p-1"><FontAwesomeIcon icon={faGoogleDrive} color="#861043" style={{ fontSize: 24 }} /></div>
                </span>
                <span className="flex justify-between  items-center rounded-sm m-0.5" style={{ background: '#FFFFFF' }}>
                    <div className="p-1"><FontAwesomeIcon icon={faGooglePlay} color="#104e64" 
                    style={{ fontSize: 24 }} /></div>
                </span>
                <span className="flex justify-between  items-center  rounded m-0.5" style={{ background: '#FFFFFF' }}>
                    <div className="p-1"><FontAwesomeIcon icon={faSlack} style={{ fontSize: 24 }} /></div>
                   
                </span>
                <span className="flex justify-between  items-center  rounded m-0.5" style={{ background: '#FFFFFF' }}>
                    <div className="p-1"><FontAwesomeIcon icon={faSalesforce} color="lightblue" style={{ fontSize: 24, }} /></div>
                   
                </span>
            </div>
        </div>
    )
}

export default Connections