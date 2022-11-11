import style from "./FeaturedWorksSection.module.css"
import FeaturedWorksContainer from "./FeaturedWorksContainer";

const FeaturedWorksSection = () => {
    return (
        <section className={style.featuredWorks}>
            <div className={`${style.featuredWorksContainer} ${style.container}`}>
                <div className={`${style.featuredWorksTitle} ${style.titlePosts}`}>Featured works</div>
                <div className={`${style.featuredWorksItems} ${style.works}`}>
                    <FeaturedWorksContainer />
                </div>
            </div>
        </section>
    )
}

export default FeaturedWorksSection