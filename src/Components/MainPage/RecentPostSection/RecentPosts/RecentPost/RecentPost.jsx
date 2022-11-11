import style from "./RecentPost.module.css"
import {NavLink} from "react-router-dom";

const RecentPost = (props) => {
    return (
        <div className={style.recentPostsColumn}>
            <article className={`${style.recentPostsItem} ${style.recentPost}`}>
                <div className={style.recentPostTitle}>{props.data.postName}</div>
                <div className={style.recentPostInfo}>{props.data.date} <span>|</span> {props.data.category}
                </div>
                <div className={`${style.recentPostText} ${style.text}`}>
                    {props.data.text}
                </div>
            </article>
        </div>
    )
}

export default RecentPost