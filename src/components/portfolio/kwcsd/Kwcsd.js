import React from 'react'
import { useStyles } from '../../../style/style'
import './accordian.css'
// import '@fortawesome/free-solid-svg-icons'
import KwcCarousel from './KwcCarousel'

export default function Kwcsd() {
    const classes = useStyles()

    return (
        <div className={classes.contentWrapper}>
            <div className={classes.content}>
            <div className={classes.flexCol}>
                <h1> KWC San Diego</h1>

                <h2>Abstract</h2>
                <p>The pacific commercial partners previously had a dated and incomplete website. Initially their objective was to refurbish the existing site with new content, and better api integrations. It became clear that the best approach would be to create a new react based single page application to accommodate the needs of the pacific commercial partners.</p>

                <p>The new SPA would need to accomplish 3 primary functions to meet the needs of the pacific commercial partners team. The application would need to host some basic marketing materials. Second, the app would need some custom API to handle scraping for some real estate listing data. And lastly, the app would need another API to handle some input forms etc.</p>

                <hr className={classes.horizLine} />

                <div style={{ alignItems: 'flex-start' }} className={classes.flexRow}>

                    <div className={classes.flexCol}>
                        <div className={classes.list}>
                            <h2>Libraries Used</h2>
                            <i className="fas fa-terminal">&nbsp; React</i><br />
                            <i className="fas fa-terminal">&nbsp; Material-UI</i><br />
                            <i className="fas fa-terminal">&nbsp; Axios</i><br />
                            <i className="fas fa-terminal">&nbsp; Styled-Components</i><br />
                            <i className="fas fa-terminal">&nbsp; React-Router</i><br />
                            <i className="fas fa-terminal">&nbsp; Yup</i><br />
                        </div>
                    </div>

                    <div className={classes.flexCol}>
                        <div className={classes.list}>
                            <h2>Currently under development</h2>
                            <i className="fas fa-code-branch">&nbsp; Backend for admin to add / edit content</i><br />
                            <i className="fas fa-code-branch">&nbsp; Captcha</i><br />
                            <i className="fas fa-code-branch">&nbsp; Dynamic bio pictures</i><br />

                            <i className="fas fa-code-branch">&nbsp; Upgrade responsive design</i><br />
                            <i className="fas fa-code-branch">&nbsp; A summer vacation at a lake</i><br />
                        </div>
                    </div>
                </div>

                <hr className={classes.horizLine} />

                <div className={classes.flexCol}>
                    <KwcCarousel />
                </div>
                <a className={classes.link} href='https://www.kwcsandiego.com'>KWC San Diego</a>

                <div className={classes.flexCol}>
                    <h2>Credits</h2>
                    <div className={classes.list}>
                        <li>1. Jason Fadelli - Creator</li>
                        <li>2. Dang Lu - Co-Creator &nbsp;<sup>(The guy who fixed everything and I'm convinced doesn't ever sleep)</sup></li>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

