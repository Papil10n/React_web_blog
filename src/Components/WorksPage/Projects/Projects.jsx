import Project from "./Project/Project";

const Projects = (props) => {

    let worksItem = props.works.map(work => <Project data={work} key={work.id}/>)


    return (<>
            {worksItem}
        </>
    )
}

export default Projects