import RecentPostInfo from "./RecentPostInfo/RecentPostInfo";
import style from "./RecentPostSection.module.css"
import RecentPostsContainer from "./RecentPosts/RecentPostsContainer";

const RecentPostSection = () => {
    return (
        <section className={style.recentPosts}>
            <div className={`${style.recentPostsContainer} ${style.container}`}>
                <RecentPostInfo/>
                <RecentPostsContainer />
            </div>
        </section>
    )
}

export default RecentPostSection