import style from "./WorksPage.module.css"
import ProjectsContainer from "./Projects/ProjectsContainer";

const WorksPage = (props) => {
    console.log()
    return (
        <div className={`${style.worksPageContainer} ${style.container}`}>
            <h1 className={`${style.worksMainTitle} ${style.title}`}>Works</h1>
            <div className={style.worksItems} >
                <ProjectsContainer />
            </div>
        </div>
    )
}

export default WorksPage