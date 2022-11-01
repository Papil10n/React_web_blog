import {NavLink} from "react-router-dom";
import style from "./Menu.module.css";

const Menu = () => {
    return <>
        <nav className="menu__body">
            <ul className="menu__list">
                <li><NavLink to="/" className={style.menuLink}>Home</NavLink></li>
                <li><NavLink to="/works" className="menu__link">Works</NavLink></li>
                <li><NavLink to="/blog" className="menu__link">Blog</NavLink></li>
                <li><NavLink to="/contacts" className="menu__link">Contact</NavLink></li>
            </ul>
        </nav>
    </>
}

export default Menu