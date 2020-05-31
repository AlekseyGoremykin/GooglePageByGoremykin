import React from 'react';
import './App.scss';
import Logo from './images/logo.png';
import Keyboard from './images/keyboard.png';
import Avatar from './images/avatar.png';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from "react-i18next";


function App() {

    const searchInput = React.createRef();

    const {t, i18n} = useTranslation();

    const setLanguages = (lang) => {
        i18n.changeLanguage(lang);
    }

    const generateUrl = () => {
        let searchTerm = searchInput.current.value
        searchTerm = searchTerm.split(' ').filter(word => word).map(word => encodeURI(word)).join('+');

        if(searchTerm) {
            window.location.href = `https://www.google.com/search?q=${searchTerm}`
        }
    }

    return (
        <div className="appWrapper">
            <div className="header">
                <nav className="headerMenu">
                    <ul>
                        <li>
                            <a href="https://mail.google.com/mail/u/0/?tab=wm&ogbl">{t("mailLink")}</a>
                        </li>
                        <li>
                            <a href="https://www.google.by/imghp?hl=ru&tab=wi&ogbl">{t("imagesLink")}</a>
                        </li>
                        <li title={t("apps")}>
                            <a href="https://about.google/intl/ru/products/?tab=wh" className="googleApps"> </a>
                        </li>
                        <li className="googleAccount" title={t("account")}>
                            <span><img className="avatar" src={Avatar} alt=""/></span>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="main">
                <main>
                    <div className="logo">
                        <img src={Logo} alt={t("logo")}/>
                    </div>
                    <div className="searchForm">
                        <div className="searchString">
                            <div className="magnifier">
                                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                            </div>
                            <div>
                                <input className="searchInput" onKeyDown={ (event) => { if(event.keyCode === 13){generateUrl()} }} ref={searchInput} type="text"/>
                            </div>
                            <div className="screenKeyboard">
                                <Tooltip title={t("keyboard")} arrow>
                                    <img src={Keyboard} alt={t("keyboard")} />
                                </Tooltip>
                            </div>
                        </div>
                        <div className="searchButtons">
                            <input type="button" className="btn" onClick={ generateUrl } value={t("searchButton")}/>
                            <input type="button" className="btn" value={t("luckyButton")}/>
                        </div>
                    </div>
                    <div className="languages">
                        {t("languageSelection")} <span onClick={() => setLanguages("en")}>English</span> <span onClick={() => setLanguages("ru")}>Русский</span>
                    </div>
                </main>
            </div>

            <div className="footer">
                <footer>
                    <div className="country">
                        {t("country")}
                    </div>
                    <div className="footerMenu">
                        <ul className="leftFooterMenu">
                            <li>
                                <a href="https://ads.google.com/intl/ru_by/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">{t("advertising")}</a>
                            </li>
                            <li>
                                <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none">{t("business")}</a>
                            </li>
                            <li>
                                <a href="https://about.google/?utm_source=google-BY&utm_medium=referral&utm_campaign=hp-footer&fg=1">{t("about")}</a>
                            </li>
                            <li className="howGoogleSearchWorks">
                                <a href="https://www.google.com/search/howsearchworks/?fg=1">{t("howSearchWorks")}</a>
                            </li>
                        </ul>
                        <ul className="rightFooterMenu">
                            <li>
                                <a href="https://policies.google.com/privacy?fg=1">{t("privacy")}</a>
                            </li>
                            <li>
                                <a href="https://policies.google.com/terms?fg=1">{t("terms")}</a>
                            </li>
                            <li>
                                <span className="settingsButton" tabIndex="1">
                                    <div className="settings">
                                        <ul>
                                            <li>
                                                <span>{t("searchSettings")}</span>
                                            </li>
                                            <li>
                                                <span>{t("advancedSearch")}</span>
                                            </li>
                                            <li>
                                                <span>{t("yourData")}</span>
                                            </li>
                                            <li>
                                                <span>{t("history")}</span>
                                            </li>
                                            <li>
                                                <span>{t("searchHelp")}</span>
                                            </li>
                                            <li>
                                                <span>{t("sendFeedback")}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {t("settings")}
                                </span>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
