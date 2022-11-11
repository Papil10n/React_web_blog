import style from "./RecentPostInfo.module.css"
import {NavLink} from "react-router-dom";

const RecentPostInfo = () => {
    return (
        <div className={style.recentPostsHeader}>
            <div className={`${style.recentPostsTitle} ${style.titlePosts}`}>Recent posts</div>
            <NavLink to="/blog" className={style.recentPostsViewAll}>View all</NavLink>
        </div>
    )
}

export default RecentPostInfo