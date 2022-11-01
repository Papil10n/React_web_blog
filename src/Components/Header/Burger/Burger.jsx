import style from "./Burger.module.css";

const Burger = () => {

    const classes = `${style.menuIcon} ${style.iconMenu}`;

    return <>
        <div className={classes}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </>
}

export default Burger;