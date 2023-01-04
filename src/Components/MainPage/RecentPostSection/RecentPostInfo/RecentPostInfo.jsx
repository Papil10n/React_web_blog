import {NavLink} from "react-router-dom";

const RecentPostInfo = () => {
    return (
        <div className="flex mb-[20px]">
            <div className="flex-auto text-[22px] pr-[22px] ">Recent posts</div>
            <NavLink to="/blog"
                     className="grow-0 shrink-0 basis-auto text-base text-[#00a8cc] transition duration-300 ease-in-out hover:text-[#21243d]">View
                all</NavLink>
        </div>
    )
}

export default RecentPostInfo