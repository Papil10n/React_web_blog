import WorkItem from "./WorkItem";


const WorkItems = (props) => {
    let arr = [props.featuredWorks[0], props.featuredWorks[6], props.featuredWorks[11]];
    let featuredWorksItems = arr.map(work => <WorkItem data={work} key={work.id} />)

    return (
        <>
            {featuredWorksItems}
        </>
    )

}

export default WorkItems;