import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";

const Search = ()=>{
    return (
         <div className="flex justify-between w-[90vw] m-6">
                        <div className="flex items-center border-1 rounded w-[80%] " style={{background :'#F0F0F0'}}>
                        <span className="ml-3"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        <input
                         type="text"
                        placeholder="Search"
                        className="ml-3 border-none focus:outline-none focus:ring-0"
                        />
                        </div>
                        <div className="border-1 rounded p-2 " style={{background :'#F0F0F0'}}>
                        <FontAwesomeIcon icon={faArrowDownUpAcrossLine} />
                        </div>
                    </div>
    )
}

export default Search;