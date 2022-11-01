import style from "./GreetContent.module.css";

const GreetContent = () => {
    return (
        <div className={style.helloContent}>
            <h1 className={`${style.helloTitle} ${style.title}`}>Hi, I am Nick,<br /> Front-end Developer</h1>
            <div className={`${style.helloText} ${style.text}`}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </div>
            <a href="https://drive.google.com/uc?export=download&id=1bq2YrsjpowZGfyGUwDipDT_Mvrb2AEIN"
               className={`${style.helloBtn} ${style.btn}`}>Download Resume*</a>
        </div>
    )
}

export default GreetContent