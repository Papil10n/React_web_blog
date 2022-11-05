import style from "./BlogPage.module.css"
import PostsContainer from "./Posts/PostsContainer";

const BlogPage = () => {
    return (
        <div className={`${style.blog} ${style.pageContainer} ${style.container}`}>
            <h1 className={`${style.blogTitle} ${style.title}`}>Blog</h1>
            <div className={style.blogItems}>
                <PostsContainer />
            </div>
        </div>
    )
}

export default BlogPage