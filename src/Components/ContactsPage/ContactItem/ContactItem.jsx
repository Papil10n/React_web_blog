import style from "./ContactItem.module.css"

const ContactItem = () => {
    return (
        <div className={style.contactItem}>
            <div className={style.contactName}>Gmail</div>
            <div className={style.contactLink}>nikept.co@gmail.com</div>
            <div className={`${style.contactText} ${style.text}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                amet.
            </div>
        </div>
    )
}

export default ContactItem