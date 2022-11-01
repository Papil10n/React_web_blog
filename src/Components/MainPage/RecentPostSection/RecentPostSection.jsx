import RecentPostInfo from "./RecentPostInfo/RecentPostInfo";
import style from "./RecentPostSection.module.css"
import RecentPosts from "./RecentPosts/RecentPosts";

const RecentPostSection = () => {
    return (
        <section className={style.recentPosts}>
            <div className={`${style.recentPostsContainer} ${style.container}`}>
                <RecentPostInfo/>
                <RecentPosts/>
            </div>
        </section>
    )
}

export default RecentPostSection