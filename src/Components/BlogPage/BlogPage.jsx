import Post from "./Post/Post";

const BlogPage = () => {
    return (
        <div className="blog page__container _container">
            <h1 className="blog__title title">Blog</h1>
            <div className="blog__items">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default BlogPage