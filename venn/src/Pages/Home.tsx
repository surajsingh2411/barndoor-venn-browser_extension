import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

const Home = ()=>{
return(
    <div className="w-full h-full">
    <h1 className="text-red-800 border-amber-300">hello </h1>
   <div className="flex ">
   <FontAwesomeIcon icon={faSkull} className="w-5 h-5" /> Venn
   </div>
    <p> work from homw feature </p>
    </div>
)

}

export default Home;