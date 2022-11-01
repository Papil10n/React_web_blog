const RecentPost = () => {
    return (
        <div className="recent-posts__column">
            <article className="recent-posts__item recent-post">
                <a href="blog.html" className="recent-post__title">Redux</a>
                <div className="recent-post__info">1 Oct 2022 <span>|</span>State management,
                    createStore(),
                    Observer(pattern), dispatch,
                    context
                    API, combineReducers()
                </div>
                <div className="recent-post__text text">
                    Exercitation veniam consequat sunt nostrud amet. Consequat sunt nostrud amet.
                </div>
            </article>
        </div>
    )
}

export default RecentPost