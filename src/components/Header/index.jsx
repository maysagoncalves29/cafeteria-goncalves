import Navbar from "../Navbar";
import Logo from "../Logo"
import CartWidget from "../CartWidget";


export default function Header() {
    return(
<div>
            <header className="">
                <div className="">
            
            <Logo/>
           
            <h1>Cafeteria Dev</h1>
            <Navbar/>
           
            </div>
            <div className="btns-header">
            <button className="btn-login">Início</button>
            <button className="btn-login">Login</button>
            </div>
            <CartWidget/>
            </header>  
            
    </div>
            
    );
}