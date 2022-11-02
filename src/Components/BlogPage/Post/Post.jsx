import style from "./Post.module.css"

const Post = () => {
    return (
        <div className={style.blogItem}>
            <div className={style.blogArticleName}>Mimo learning</div>
            <div className={style.blogInfo}>
                <div className={style.blogDate}>29 Mar 2022</div>
                <span className={style.blogSeparator}>|</span>
                <div className={style.blogCategory}>Mimo, mobile app</div>
            </div>
            <div className={`${style.blogText} ${style.text}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                nostrud amet.
            </div>
        </div>
    )
}

export default Post