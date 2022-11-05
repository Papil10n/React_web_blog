import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        posts: state.blogPage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;

