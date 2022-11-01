import WelcomeSection from "./WelcomeSection/WelcomeSection";
import RecentPostInfo from "./RecentPostSection/RecentPostInfo/RecentPostInfo";
import RecentPost from "./RecentPostSection/RecentPosts/RecentPost/RecentPost";
import RecentPosts from "./RecentPostSection/RecentPosts/RecentPosts";
import RecentPostSection from "./RecentPostSection/RecentPostSection";

const MainPage = () => {
    return (
        <main className="page">
            <WelcomeSection/>
            <RecentPostSection />

            {/*featured works*/}
            <section className="featured-works">
                <div className="featured-works__container _container">
                    <div className="featured-works__title title-posts">Featured works</div>
                    <div className="featured-works__items works">
                        <article className="works__item">
                            <a href="https://papil10n.github.io/Pomodoro_Clock/" className="works__image _ibg">
                                <img src="img/works/05.jpg" alt="Work #1"/>
                            </a>
                            <div className="works__body">
                                <div className="works__title"><a href="https://papil10n.github.io/Pomodoro_Clock/">Pomodoro
                                    Clock</a></div>
                                <div className="works__info">
                                    <div className="works__year">2022</div>
                                    <div className="works__category">JS App</div>
                                </div>
                                <div className="works__text text">Amet minim mollit non deserunt ullamco est sit
                                    aliqua
                                    dolor do
                                    amet sint. Velit
                                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                                    nostrud
                                    amet.
                                </div>
                            </div>
                        </article>
                        <article className="works__item">
                            <a href="https://papil10n.github.io/Calculator/" className="works__image _ibg">
                                <img src="img/works/06.jpg" alt="Work #1"/>
                            </a>
                            <div className="works__body">
                                <div className="works__title"><a
                                    href="https://papil10n.github.io/Calculator/">Calculator</a>
                                </div>
                                <div className="works__info">
                                    <div className="works__year">2022</div>
                                    <div className="works__category">JS App</div>
                                </div>
                                <div className="works__text text">Amet minim mollit non deserunt ullamco est sit
                                    aliqua
                                    dolor do
                                    amet sint. Velit
                                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                                    nostrud
                                    amet.
                                </div>
                            </div>
                        </article>
                        <article className="works__item">
                            <a href="https://papil10n.github.io/StopWatch/" className="works__image _ibg">
                                <img src="img/works/07.jpg" alt="Work #1"/>
                            </a>
                            <div className="works__body">
                                <div className="works__title"><a href="https://papil10n.github.io/StopWatch/">Stop
                                    Watch</a>
                                </div>
                                <div className="works__info">
                                    <div className="works__year">2022</div>
                                    <div className="works__category">JS App</div>
                                </div>
                                <div className="works__text text">Amet minim mollit non deserunt ullamco est sit
                                    aliqua
                                    dolor do
                                    amet sint. Velit
                                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                                    nostrud
                                    amet.
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MainPage