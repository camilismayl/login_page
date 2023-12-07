import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';
import fonts from 'assets/styles/abstracts/fonts';
const minWidth = 1200;

const styles = {
    welcome: {
        paddding: rem(19),
        background: 'white',
        width: '1224px',
        height: '741px',
        borderRadius: rem(40),
        boxShadow: '0px 4px 35px 0px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '100%',
        marginLeft: '25px',
        marginRight: '25px'
    },
    details: {
        width: '460px',
        padding: '0 25px'
    }, detailsText: {
        fontSize: rem(55), textAlign: 'center',

    },
    welcomeText: { marginBottom: rem(25) },
    userText: {
        marginBottom: rem(85),
        color: colors.signInButton
    }, [`@media screen and (max-width: ${minWidth}px)`]: {
        welcome: {
            width: '100%'
        },
        detailsText: {
            fontSize: rem(40), textAlign: 'center',

        },

    },
    [`@media screen and (max-width: 500px)`]: {

        details: {
            width: '100%'
        }
    },

};

export const useHomeStyles = createUseStyles(styles);
