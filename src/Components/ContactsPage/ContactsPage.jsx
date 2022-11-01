import ContactItem from "./ContactItem/ContactItem";


const ContactsPage = () => {
    return (
        <div className="contact__container _container">
            <h1 className="contact__title title">Contact</h1>
            <div className="contact__items">
                <ContactItem />
                <ContactItem />
                <ContactItem />
            </div>
        </div>
    )
}

export default ContactsPage