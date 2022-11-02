import style from "./Project.module.css"

const Project = (props) => {
    return (
        <article className={style.worksItem}>
            <a href={props.data.link} className={`${style.worksImage} ${style.ibg}`}>
                <img src={props.data.image ? props.data.image : "https://cdn-icons-png.flaticon.com/512/2748/2748558.png"} alt="Work #1"/>
            </a>
            <div className={style.worksBody}>
                <div className={style.worksTitle}>
                    <a href={props.data.link}>{props.data.workName}</a>
                </div>
                <div className={style.worksInfo}>
                    <div className={style.worksYear}>{props.data.yearCreated}</div>
                    <div className={style.worksCategory}>{props.data.category}</div>
                </div>
                <div className={`${style.worksText} ${style.text}`}>{props.data.description}
                </div>
            </div>
        </article>
    )
}

export default Project