import RecentPostInfo from "./RecentPostInfo/RecentPostInfo";
import RecentPostsContainer from "./RecentPosts/RecentPostsContainer";

const RecentPostSection = () => {
    return (
        <section className="bg-[#edf7fa] pt-[25px] pb-[13px] px-0 md:px-6">
            <div className="rpCont">
                <RecentPostInfo/>
                <RecentPostsContainer />
            </div>
        </section>
    )
}

export default RecentPostSection