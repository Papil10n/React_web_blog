import RecentPosts from "./RecentPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        recentPosts: state.blogPage.posts
    }
}

let mapDispatchToProps = () => {
    return {}
}

const RecentPostsContainer = connect(mapStateToProps,mapDispatchToProps)(RecentPosts);

export default RecentPostsContainer;