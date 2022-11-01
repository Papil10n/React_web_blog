import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerContent}>
                <div className={`${style.headerMenu} ${style.menu}`}>
                    <Burger/>
                    <Menu/>
                </div>
            </div>
        </header>
    )
}

export default Header;