import RecentPost from "./RecentPost/RecentPost";

const RecentPosts = (props) => {
    let length = props.recentPosts.length;
    let arr = [...props.recentPosts.slice(length-2, length)]
    let recentPostItems = arr.map(recentPost => <RecentPost data={recentPost} key={recentPost.id} />)

    return (
        <div className="flex mx-[-10px]">
            {recentPostItems}
        </div>
    )
}

export default  RecentPosts