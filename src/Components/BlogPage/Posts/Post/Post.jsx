import style from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={style.blogItem}>
            <div className={style.blogArticleName}>{props.data.postName}</div>
            <div className={style.blogInfo}>
                <div className={style.blogDate}>{props.data.date}</div>
                <span className={style.blogSeparator}>|</span>
                <div className={style.blogCategory}>{props.data.category}</div>
            </div>
            <div className={`${style.blogText} ${style.text}`}>{props.data.text}</div>
        </div>
    )
}

export default Post