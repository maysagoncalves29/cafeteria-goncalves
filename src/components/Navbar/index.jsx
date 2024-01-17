export default function Navbar(){
    const style ={
        display: "flex",
        gap: "174px",
        listStyle: "none"
    }
    return (
        <nav className="menu">
        <ul style={style}>
            <li><a href="/#">Sobre nós</a></li>
            <li><a href="/#">Tipos de Café</a></li>
            <li><a href="/#">Tabela de Preços</a></li>
            <li><a href="/#">Sugestão dos Baristas</a></li>
           
        </ul>
    </nav>
    );
}