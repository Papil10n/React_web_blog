import ContactItem from "./ContactItem/ContactItem";
import style from "./ContactsPage.module.css"


const ContactsPage = () => {
    return (
        <div className={`${style.contactContainer} ${style.container}`}>
            <h1 className={`${style.contactTitle} ${style.title}`}>Contact</h1>
            <div className={`${style.contactItems}`}>
                <ContactItem />
                <ContactItem />
                <ContactItem />
            </div>
        </div>
    )
}

export default ContactsPage