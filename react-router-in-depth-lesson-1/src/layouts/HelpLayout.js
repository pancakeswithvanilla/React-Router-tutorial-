import React from "react";
import { NavLink,Outlet } from "react-router-dom";
export default function HelpLayout(){
    return(<div className ="help-layout">
        <h2>Website Help</h2>
        <p>Te iubesc puiut! Imi dai puterea sa merg mai departe!</p>
        <nav>
    <NavLink to = "faq">FAQ</NavLink>
    <NavLink to = "contact">Contact</NavLink>
        </nav>
        <Outlet></Outlet>
    </div>)
}