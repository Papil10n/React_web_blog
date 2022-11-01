import style from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`${style.footerContent} ${style.container}`}>
                <div className={`${style.footerSocial} ${style.social}`}>
                    <a href="" className={style.socialItem}><img src="#" alt="fb" /></a>
                    <a href="https://www.instagram.com/papil10n_/" target="_blank" className={style.socialItem}><img
                        src="#" alt="insta" /></a>
                    <a href="" className={style.socialItem}><img src="#" alt="Linkedin" /></a>
                    <a href="" className={style.socialItem}><img src="#" alt="twit" /></a>
                </div>
                <div className="footer__copy">Copyright ©2020 All rights reserved</div>
            </div>
        </footer>
    )
}

export default Footer