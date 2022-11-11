import style from "./ContactsPage.module.css"
import ContactContainer from "./ContactItem/ContactContainer";


const ContactsPage = () => {
    return (
        <div className={`${style.contactContainer} ${style.container}`}>
            <h1 className={`${style.contactTitle} ${style.title}`}>Contact</h1>
            <div className={`${style.contactItems}`}>
                <ContactContainer />
            </div>
        </div>
    )
}

export default ContactsPage