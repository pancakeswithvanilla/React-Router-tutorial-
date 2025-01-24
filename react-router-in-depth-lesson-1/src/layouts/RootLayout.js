import React from "react";
import {NavLink,Outlet} from "react-router-dom"
export default function RootLayout(){
    return(
        <div className ="rootlayout">
                  <header>
                  <nav>
                    <h1>Jobrouter</h1>
                    <NavLink to ="/">Home</NavLink>
                    <NavLink to ="/about">About</NavLink> 
                    <NavLink to ="help">Help</NavLink>
                    <NavLink to ="careers">Careers</NavLink>
            
                  </nav>
                </header>
                <main>
                    <Outlet>

                    </Outlet>
                </main>
        </div>
    )
}