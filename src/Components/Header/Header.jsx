import Menu from "./Menu/Menu";
import Burger from "./Burger/Burger";

const Header = () => {
    return (
        <header className="z-10 relative">
            <div className="mx-auto max-w-5xl">
                <div className="flex pb-4 mt-4 items-center justify-end " >
                    <Menu/>
                    <Burger/>
                </div>
            </div>
        </header>
    )
}

export default Header;