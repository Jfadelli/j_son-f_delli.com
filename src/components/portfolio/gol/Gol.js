import React from 'react'
import { Link } from 'react-router-dom'

import { useStyles } from '../../../style/style'
import './game.css'
import Game from './game'

export default function Gol() {
    const classes = useStyles()

    return (
        <div className={classes.contentWrapper}>
            <div className={classes.header}>
                <br />
                <h2>A Custom Rendition of...</h2>

            </div>

            <Game style={{maxWidth: '1024px'}}/>
            <div className={classes.flexRow}>
                <Link className={classes.link} to='/'>Find this app on GitHub</Link>
            </div>
            <br />
            {/* <hr className={classes.horizLine} /> */}
        </div>
    )
}