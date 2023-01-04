import FeaturedWorksContainer from "./FeaturedWorksContainer";

const FeaturedWorksSection = () => {
    return (
        <section className=" mt-[30px] mb-[80px] px-0 md:px-6">
            <div className="featuredCont">
                <div className="text-[22px] pb-[20px]">Featured works</div>
                <div className="works cont">
                    <FeaturedWorksContainer />
                </div>
            </div>
        </section>
    )
}

export default FeaturedWorksSection