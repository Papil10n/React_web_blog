import RecentPostInfo from "./RecentPostInfo/RecentPostInfo";
import RecentPosts from "./RecentPosts/RecentPosts";

const RecentPostSection = () => {
    return (
        <section className="recent-posts">
            <div className="recent-posts__container _container">
                <RecentPostInfo/>
                <RecentPosts/>
            </div>
        </section>
    )
}

export default RecentPostSection