import style from "./RecentPost.module.css"

const RecentPost = () => {
    return (
        <div className={style.recentPostsColumn}>
            <article className={`${style.recentPostsItem} ${style.recentPost}`}>
                <a href="#" className={style.recentPostTitle}>Redux</a>
                <div className={style.recentPostInfo}>1 Oct 2022 <span>|</span>State management,
                    createStore(),
                    Observer(pattern), dispatch,
                    context
                    API, combineReducers()
                </div>
                <div className={`${style.recentPostText} ${style.text}`}>
                    Exercitation veniam consequat sunt nostrud amet. Consequat sunt nostrud amet.
                </div>
            </article>
        </div>
    )
}

export default RecentPost