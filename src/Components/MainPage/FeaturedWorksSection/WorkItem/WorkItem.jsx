import style from "./WorkItem.module.css"

const WorkItem = () => {
    return (
        <article className={style.worksItem}>
            <a href="#" className={`${style.worksImage} ${style.ibg}`}>
                <img src="https://papil10n.github.io/My__site/img/works/05.jpg" alt="Work #1"/>
            </a>
            <div className={style.worksBody}>
                <div className={style.worksTitle}><a href="#">Pomodoro
                    Clock</a></div>
                <div className={style.worksInfo}>
                    <div className={style.worksYear}>2022</div>
                    <div className={style.worksCategory}>JS App</div>
                </div>
                <div className={`${style.worksText} ${style.text}`}>Amet minim mollit non deserunt ullamco est sit
                    aliqua
                    dolor do
                    amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                    nostrud
                    amet.
                </div>
            </div>
        </article>
    )
}

export default WorkItem