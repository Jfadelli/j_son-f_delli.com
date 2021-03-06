import { makeStyles } from '@material-ui/styles'
import { colors } from './colors'

export const useStyles = makeStyles(() => ({
    app: {
        position: 'absolute',
        fontFamily: 'Tahoma, Arial, Helvetica, sans-serif',
        width: '100%',
        minHeight: '100%',
        left: '0',
        right: '0',
        // backgroundImage: 'url(./static/bg2.jpg)',
        // backgroundSize: 'contain',
    },

    landing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        // overflow: 'hidden',
        zIndex: '1000',
        visibility: 'visible',
        opacity: '1',
        transition: 'opacity 2s linear',
    },
    landingHidden: {
        // visibility: 'hidden',
        // opacity: '0',
        // transition: 'visibility 0s 4s, opacity 2s linear',
        backroundColor: 'red'
        
    },
    enterButton: {
        zIndex: '2000',
        margin: 'auto',
        backgroundColor: 'white',
        height: '200px',
        width: '200px',
        borderRadius: '360px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        textDecoration: 'none',
        color: 'black'
    },

    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        flexGrow: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

    hero: {
        maxWidth: '1024px',
        borderRadius: '10px',
        margin: '20px auto',
        '& @media (max-width 1024px)': { display: 'none' }
    },

    header: {
        color: colors.dark,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '2rem',
        margin: '1rem 0 '
    },

    // content 
    contentWrapper: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: colors.dark,
        fontSize: '1rem',
        '& h1': {
            fontSize: '4rem',
            padding: '0',
            margin: '5px 0 3vh 0',
            textAlign: 'center',
            width: 'auto',
        },
        '& h2': {
            display: 'flex',
            fontSize: '2rem',
            justifyContent: 'center',
            padding: '0',
            margin: '0 0 1vh',
            textAlign: 'center',
            width: 'auto',
        },
        '& h3': {
            fontSize: '1.5rem',
            fontWeight: '400',
            textAlign: 'center',
            margin: '1vh 0 0vh 0',
            padding: '0'
        },
        '&h4': {
            fontSize: '1 rem',
            textDecoration: 'bold',
            margin: '0'
        },
        '& p': {
            // margin: '1rem 0 .5rem'
        }

    },

    content: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyCntent: 'center',
        alignItems: 'center',
        width: '100vw',
        maxWidth: '1024px',
        '& p': {
            margin: '1rem 0 .5rem'
        },
        // backgroundColor:'lightgreen'
    },

    gallery: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '375px',
        maxWidth: '1024px',
    },

    link: {
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        textDecoration: 'none',
        color: colors.main,
        fontWeight: '600',
        fontSize: '1.5rem',
        textAlign: 'center',
        borderBottom: `dotted ${colors.main} 1px`,
        lineHeight: '3rem',
        width: '50%',
        '&:hover': {
            color: colors.accent,
            borderBottom: `dotted ${colors.accent} 1px`
        }
    },

    linkToLoopnet: {
        textDecoration: 'none',
        color: colors.alt,
        fontWeight: '400',
        fontSize: '2rem',
        margin: '0 0 2vh 0',
        textAlign: 'center',
        '&:hover': {
            color: 'rgb(230 70 1)',
        }
    },

    // decorations
    horizLine: {
        margin: '1vh auto 4vh auto',
        border: '1px dotted ' + colors.dark,
        borderRadius: '90px',
        maxWidth: '1024px',
        width: '100%'
    },

    // flex
    flexRow: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignSelf: 'center',
        maxWidth: '1024px',
        width: '100%',

    },
    flexCol: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "left",
        margin: "2vh 5%",
    },
    flexRowTight: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignSelf: 'center',
        maxWidth: '1024px',
        width: '100%',
    },

    // font styles
    p: {
        fontSize: "1rem",
    },
    list: {
        fontSize: "1.15rem",
        margin: " .5rem 0",
        padding: "0 0 0 .5rem",
        '& li, ol, ul, i': {
            padding: "0 0 .5rem 1rem",
        },
        '& h2': {
            whiteSpace: 'nowrap',
        },
    },
    specUL: {
        marginLeft: '25px',
    },
    specOL: {
        marginLeft: '20px',
    },
    heading: {
        display: 'flex',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: "1.5rem",
        margin: "0 8rem",
        padding: "0rem",
    },
    subHeading: {
        font: colors.dark,
        margin: '2rem 0',
        textAlign: 'center',
    },

    // navbar
    topSpace: {
        padding: '.25vh'
    },

    navBar: {
        display: 'flex',
        flexWrap: 'none',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bg,
        height: '5vh',
        marign: '0 0 1vh 0',
        position: 'relative',
        zIndex: ' 500',
        width: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 5px',
    },
    navToolbar: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        height: '100%',

        justifyContent: 'space-evenly',
    },

    // nav buttons and links are in navbar '../components/navbar/style.js'

    // contact us
    contactUs: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        '& label': {
            fontSize: '1.25rem',
            margin: '0 0 .5rem',
            maxWidth: '400px',
            textAlign: 'center',
        },
        '& button': {
            margin: '2rem 2rem 2rem 150px',
            fontSize: '1.25rem',
            fontWeight: '600',
            height: '40px',
            width: '120px',
            color: colors.main,
            backgroundColor: colors.alt,
            border: '2px dotted ' + colors.main,
            borderRadius: '4px',
            '&:hover': {
                color: colors.alt,
                backgroundColor: colors.main,
                border: '2px dotted ' + colors.dark,
                cursor: 'pointer'

            }
        },
        '& input': {
            display: 'flex',
            margin: '0 0 2rem',
            outline: 'none',
            width: 'auto',
            height: '2.0rem',
            border: '2px solid ' + colors.main,
            borderRadius: '1px',
            fontSize: '1.25rem',
            maxWidth: '400px',
            minWidth: '400px',
        },

        '& textarea': {
            display: 'block',
            width: ' 400px',
            overflow: 'hidden',
            maxWidth: '380px',
            minHeight: '6rem',
            lineHeight: '20px',
            fontSize: '1.5rem',
            backgroundColor: colors.main,
            border: '1px solid ' + colors.dark,
            padding: '10px',

        }

    },
    contactImg: {
        maxWidth: '500px',
        maxHeight: '500px',
        margin: ' 0 20px',
        borderRadius: '6px',
        boxShadow: '0 10px 10px 2px rgba(0,0,0,0.2)',
        transition: '0.3s',
    },
    fadeEnter: {
        opacity: '0'
    },
    fadeExit: {
        opacity: '1',
    },
    fadeEnterActive: {
        opacity: '1',
        transition: 'opacity 500ms',
    },
    fadeExitActive: {
        opacity: '0',
        transition: 'opacity 500ms',
    },

    // black jack styles

    rankTL: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: '0 5px'

    },
    rankBR: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: '0 5px'
    },

    suite: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    bjTable: {
        borderBottomLeftRadius: '512px',  /* 100px of height + 2px of border */
        borderBottomRightRadius: '512px', /* 100px of height + 2px of border */
        margin: '1em 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        height: '600px',
        width: '1024px',
        backgroundImage: 'url(http://api.thumbr.it/whitenoise-361x370.png?background=004A00A&noise=5c5554&density=13&opacity=33)',
        borderRadius: '20px',
        border: '6px solid #301708'

    },
    dealerArea: {
        height: '200px',
        width: '600px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        border: '3px solid #FFBF00',
        borderTop: '0px',
        borderRadius: '0 0 300px 300px'
    },

    dealer: {
        display: 'flex',
    },

    playerArea: {
        height: '200px',
        width: '600px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    player: {
        display: 'flex',
    },

    pScore: {
        display: 'flex',
        border: '1px solid yellow',
        borderRadius: '6px',
        height: '30px',
        width: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightyellow',
        color: 'red'
    },
    bjControls: {
        display: 'flex',
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
}));