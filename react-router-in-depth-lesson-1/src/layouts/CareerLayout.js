import React from "react";
import {Outlet} from "react-router-dom"
export default function CareerLayout(){
    return(<div className = "careerlayout">
        <h2>Careers</h2>
        <p></p>
        <Outlet></Outlet>
    </div>)
}