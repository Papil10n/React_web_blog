import {NavLink} from "react-router-dom";
import style from "./Menu.module.css";

const Menu = () => {
    return <>
        <nav className={style.menuBody}>
            <ul className={style.menuList}>
                <li><NavLink to="/" className={style.menuLink}>Home</NavLink></li>
                <li><NavLink to="/works" className={style.menuLink}>Works</NavLink></li>
                <li><NavLink to="/blog" className={style.menuLink}>Blog</NavLink></li>
                <li><NavLink to="/contacts" className={style.menuLink}>Contact</NavLink></li>
            </ul>
        </nav>
    </>
}

export default Menu