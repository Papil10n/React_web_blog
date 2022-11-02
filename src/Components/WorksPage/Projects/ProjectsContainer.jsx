import {connect} from "react-redux";
import Projects from "./Projects";

let mapStateToProps = (state) => {
    return {
        works: state.worksPage.works
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}


const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Projects)

export default ProjectsContainer

