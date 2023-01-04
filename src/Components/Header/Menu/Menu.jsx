import {NavLink} from "react-router-dom";
import "./Menu.css";

const Link = (props) => {
    return (
        <div>
            <NavLink to={props.path}
                     className="ease-linear duration-200 active:text-orange-500 hover:opacity-80 ">
                {props.linkName}
            </NavLink>
        </div>

    )
}

const Menu = () => {
    return (<>
            <div className="hidden backgrs sm:hidden"></div>
            <nav className="hidden absolute w-full h-full flex justify-center sm:mr-4 sm:relative sm:flex sm:justify-end navMenu">
                <ul className="mt-16 sm:flex sm:mt-0">
                    <li className="mb-16 text-4xl fHo sm:mx-4 sm:text-2xl font-medium"><Link path="/home" linkName="Home" /></li>
                    <li className="mb-16 text-4xl fHo sm:mx-4 sm:text-2xl font-medium"><Link path="/works" linkName="Works"/></li>
                    <li className="mb-16 text-4xl fHo sm:mx-4 sm:text-2xl font-medium"><Link path="/blog" linkName="Blog"/></li>
                    <li className="mb-16 text-4xl fHo sm:mx-4 sm:text-2xl font-medium"><Link path="/contacts" linkName="Contacts"/></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu