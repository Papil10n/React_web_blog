import style from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`${style.footerContent} ${style.container}`}>
                <div className={`${style.footerSocial} ${style.social}`}>
                    <a href="#" className={style.socialItem}><img src="https://papil10n.github.io/Web_blog/img/ico%20svg/fb.svg" alt="fb" /></a>
                    <a href="https://www.instagram.com/papil10n_/" target="_blank" className={style.socialItem}><img
                        src="https://papil10n.github.io/Web_blog/img/ico%20svg/insta.svg" alt="insta" /></a>
                    <a href="#" className={style.socialItem}><img src="https://papil10n.github.io/Web_blog/img/ico%20svg/Linkedin.svg" alt="Linkedin" /></a>
                    <a href="#" className={style.socialItem}><img src="https://papil10n.github.io/Web_blog/img/ico%20svg/twit.svg" alt="twit" /></a>
                </div>
                <div className={style.footerCopy}>Copyright ©2020 All rights reserved</div>
            </div>
        </footer>
    )
}

export default Footer