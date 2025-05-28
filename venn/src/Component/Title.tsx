import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faUpRightAndDownLeftFromCenter,faXmark,faLink,faGear, faEllipsisVertical,faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Title = ()=>{
      const [ShowTab, SetTab] = useState(false);
    

    return(
             <div>
                    <div className="flex items-center justify-between h-[39px]  p-5" style={{ background: '#F9FAFB', border: '#E5E7EB' }}>
                        <div className="font-bold " style={{ color: "#111827" }}> <FontAwesomeIcon icon={faSkull} /> Venn</div>
                        <div className="flex gap-5">
                            <FontAwesomeIcon icon={faEllipsisVertical} size="sm"  onClick={() => {
                                SetTab(!ShowTab)
                            }} />
                            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                        </div>
                    </div>

                    {
                        ShowTab && (
                            <div className="absolute right-5  w-55 bg-white border border-gray-200 rounded-md shadow-md z-50">
                            <ul className="text-sm text-gray-700">
                              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              <FontAwesomeIcon icon={faClockRotateLeft} />
                                Chat History</li>
                             <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                             <FontAwesomeIcon icon={faLink} />
                                 Manage Connections</li>
                             <Link to ="/Settings"><li className="flex items-center gap-2  px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              <FontAwesomeIcon icon={faGear} />
                                 Settings</li></Link>
                              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              <FontAwesomeIcon icon={faXmark} />
                                Close Venn</li>       
                            </ul>
                          </div>
                        )
                    }
             </div>
    )
}

export default Title