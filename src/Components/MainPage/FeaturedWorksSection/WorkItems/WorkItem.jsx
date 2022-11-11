import style from "./WorkItem.module.css";

const WorkItem = (props) => {
    const defaultImg = 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png';
    return (
        <article className={style.worksItem}>
            <a href={props.data.link} className={`${style.worksImage} ${style.ibg}`}>
                <img src={props.data.image ? props.data.image : defaultImg} alt="Work"/>
            </a>
            <div className={style.worksBody}>
                <div className={style.worksTitle}><a href={props.data.link}>{props.data.workName}</a></div>
                <div className={style.worksInfo}>
                    <div className={style.worksYear}>{props.data.yearCreated}</div>
                    <div className={style.worksCategory}>{props.data.category}</div>
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