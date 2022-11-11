import style from "./Contact.module.css";

const Contact = (props) => {
    console.log(props)
    return (
        <div className={style.contactItem}>
            <div className={style.contactName}>{props.data.type}</div>
            <div className={style.contactLink}>{props.data.contact}</div>
            <div className={`${style.contactText} ${style.text}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                amet.
            </div>
        </div>
    )
}

export default Contact