import {connect} from "react-redux";
import Contacts from "./Contacts";

let mapStateToProps = (state) => {
    return {
        contacts: state.contactPage.contacts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}




const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);


export default ContactContainer;