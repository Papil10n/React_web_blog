import style from "./RecentPostInfo.module.css"

const RecentPostInfo = () => {
    return (
        <div className={style.recentPostsHeader}>
            <div className={`${style.recentPostsTitle} ${style.titlePosts}`}>Recent posts</div>
            <a href="blog.html" className={style.recentPostsViewAll}>View all</a>
        </div>
    )
}

export default RecentPostInfo