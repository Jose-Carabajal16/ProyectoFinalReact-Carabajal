import CartWidget from "../cartwidget/cartwidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navBar">
        <Link to="/" className="logo"><p>AFRODITA</p></Link>
        <ul className="navBarMenu">
            <li><Link to="/" className="links">Inicio</Link></li>
            <li><Link to="/category/aros" className="links">Aros</Link></li>
            <li><Link to="/category/pulceras" className="links">Pulceras</Link></li>
            <li><CartWidget /></li>
        </ul>
        </nav>
    )
}

export default Navbar