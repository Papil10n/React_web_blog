import GreetContent from "./GreetContent/GreetContent";

const WelcomeSection = () => {
    return (
        <section className="hello">
            <div className="hello__container _container">
                <GreetContent />
                <img className="hello__avatar" src="img/avatar.jpg" alt="#" />
            </div>
        </section>
    )
}

export default WelcomeSection