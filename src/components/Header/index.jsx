import Navbar from "../Navbar";
import Logo from "../Logo"

export default function Header() {
    return(

            <header className="header-container">
                <div className="header-content">
            <Logo/>
            <h1>Cafeteria Dev</h1>
            <Navbar/>
            </div>
            <button className="btn-login">Início</button>
            <button className="btn-login">Login</button>
            </header>  
    );
}