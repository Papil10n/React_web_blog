import {connect} from "react-redux";
import WorkItems from "./WorkItems/WorkItems";

let mstp = (state) => {
    return {
        featuredWorks: state.worksPage.works
    }
};


const FeaturedWorksContainer = connect(mstp, {})(WorkItems);

export default FeaturedWorksContainer;