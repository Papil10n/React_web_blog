import {NavLink} from "react-router-dom";
import style from "./Menu.module.css";

const Link = (props) => {
    return (
        <div>
            <NavLink to={props.path}
                     className={link => link.isActive ? `${style.menuLink} ${style.active}` : style.menuLink}>
                {props.linkName}
            </NavLink>
        </div>

    )
}

const Menu = (props) => {
    return (
        <nav className={style.menuBody}>
            <ul className={style.menuList}>
                <li><Link path="/home" linkName="Home">Home</Link></li>
                <li><Link path="/works" linkName="Works">Works</Link></li>
                <li><Link path="/blog" linkName="Blog">Blog</Link></li>
                <li><Link path="/contacts" linkName="Contacts">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Menu