import {connect} from "react-redux";
import WorkItems from "./WorkItems/WorkItems";

let mstp = (state) => {
    return {
        featuredWorks: state.worksPage.works
    }
};

let mdtp = (dispatch) => {
    return {

    }
};

const FeaturedWorksContainer = connect(mstp, mdtp)(WorkItems);

export default FeaturedWorksContainer;