import Project from "./Project/Project";

const WorksPage = () => {
    return (
        <div className="works page__container _container">
            <h1 className="works__main-title title">Works</h1>
            <div className="works__items">
                {/* article works__item*/}
                <Project />
                <Project />
            </div>
        </div>
    )
}

export default WorksPage