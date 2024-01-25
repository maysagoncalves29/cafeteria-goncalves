import Navbar from "../Navbar";
import Logo from "../Logo"
import CartWidget from "../CartWidget";
import ItemCount from "../ItemCount";
import { useState } from "react";


export default function Header() {
    const style ={
        display: "flex",
        justifyContent: "space-between"
    }
    const styleInicio ={
        display: "flex",
        justifyContent: "flex-end"
    }
    const styleLogo={
        display: "flex",
        justifyContent: "flex-start"
    }
    const styleTitle ={
        display: "flex",
        justifyContent: "center",
        marginLeft: "-750px"
    }
    
    

    return(
        
<header className=""> 
            <div style={styleInicio}>
                <button className="btn-inicio">Início</button>
            </div>
            <div> 
                <div style={styleLogo}> 
                    <Logo />
                    <h1 style={styleTitle}>Cafeteria Dev</h1>
                </div>
                <Navbar/>
            </div>
            <div style={style}> 
                <CartWidget/>
                <button className="btn-login">Login</button>
            </div>
        </header>
            
    );
}