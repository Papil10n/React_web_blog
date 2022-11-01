import RecentPost from "./RecentPost/RecentPost";
import style from "./RecentPosts.module.css"

const RecentPosts = () => {
    return (
        <div className={style.recentPostsItems}>
            <RecentPost />
            <RecentPost />
        </div>
    )
}

export default  RecentPosts