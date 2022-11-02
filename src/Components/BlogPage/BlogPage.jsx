import Post from "./Post/Post"
import style from "./BlogPage.module.css"

const BlogPage = () => {
    return (
        <div className={`${style.blog} ${style.pageContainer} ${style.container}`}>
            <h1 className={`${style.blogTitle} ${style.title}`}>Blog</h1>
            <div className={style.blogItems}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default BlogPage