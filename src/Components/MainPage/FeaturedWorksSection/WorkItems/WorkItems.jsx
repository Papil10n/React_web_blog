import WorkItem from "./WorkItem";


const WorkItems = (props) => {
    let arr = [props.featuredWorks[0], props.featuredWorks[1], props.featuredWorks[2]];
    let featuredWorksItems = arr.map(work => <WorkItem data={work} key={work.id} />)

    return (
        <>
            {featuredWorksItems}
        </>
    )

}

export default WorkItems;