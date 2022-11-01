import GreetContent from "./GreetContent/GreetContent"
import style from "./WelcomeSection.module.css"
import img from "./../../../Image/avatar.jpg"

const WelcomeSection = () => {
    return (
        <section className={style.hello}>
            <div className={`${style.helloContainer} ${style.container}`}>
                <GreetContent />
                <img className={style.helloAvatar} src={img} alt="#" />
            </div>
        </section>
    )
}

export default WelcomeSection