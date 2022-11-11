import Contact from "./Contact/Contact";

const Contacts = (props) => {

    let contactsItems = props.contacts.map(contact => <Contact data={contact} key={contact.id}/>)

    return (<>
            {contactsItems}
        </>
    )
}

export default Contacts