import WorkItem from "./WorkItem/WorkItem"
import style from "./FeaturedWorksSection.module.css"

const FeaturedWorksSection = () => {
    return (
        <section className={style.featuredWorks}>
            <div className={`${style.featuredWorksContainer} ${style.container}`}>
                <div className={`${style.featuredWorksTitle} ${style.titlePosts}`}>Featured works</div>
                <div className={`${style.featuredWorksItems} ${style.works}`}>
                    <WorkItem/>
                    <WorkItem/>
                    <WorkItem/>
                </div>
            </div>
        </section>
    )
}

export default FeaturedWorksSection