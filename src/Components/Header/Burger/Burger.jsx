import "./Burger.css";
import {useState} from "react";

const Burger = () => {

    let [isScrolling, setIsScrolling] = useState(true);

    const setBurgerShowing = () => {
        setIsScrolling(!isScrolling);
        const d =  document.querySelector(".navMenu");
        const b = document.querySelector(".backgrs");

        d.classList.toggle("hidden");
        b.classList.toggle("hidden");

        document.body.style.overflow = isScrolling ? "hidden" : "";
    }

    return <>
            <div onClick={setBurgerShowing} className="burger m-3 block relative w-8 h-4 cursor-pointer sm:hidden">
                <span className="w-full h-0.5 absolute bg-black top-0"></span>
                <span className="w-full h-0.5 absolute bg-black top-2"></span>
                <span className="w-full h-0.5 absolute bg-black top-4"></span>
            </div>
    </>
}


export default Burger;