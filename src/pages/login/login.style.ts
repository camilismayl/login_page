import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';
import fonts from 'assets/styles/abstracts/fonts';
const minWidth = 1200;
const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },

    card: {
        zIndex: '6',
        position: 'realative',
        margin: '0 25px',
        boxShadow: '0px 4px 35px 0px rgba(0, 0, 0, 0.08)',
        borderRadius: '40px',
        width: '539px',
        height: '741px',
    },
    wrapper: {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontFamily: fonts.font,

        fontSize: rem(20),
    },
    subtitle: {
        fontSize: rem(55),
        fontFamily: fonts.fontMain,
    },
    input: {
        height: `${'57px'} !important`,
        fontFamily: `${fonts.fontLight}!important`,
        fontSize: `${'14px'}!important`,
    },
    p: {
        fontSize: `${'16px'} `,
        fontFamily: `${fonts.font} `,
    },

    placeholder: {
        fontFamily: `${fonts.fontLight}!important`,
        fontSize: `${'14px'}!important`, '&::placeholder': {
            fontFamily: `${fonts.fontLight}!important`,
            fontSize: `${'14px'}!important`,
            color: colors.placeholder
        }
    },
    or: {
        fontSize: `${'16px'} `, color: ' #ABABAB',
        fontFamily: `${fonts.font} `,
    },
    invalidField: { border: '1px solid ' + colors.validationErrorColor },
    forgotPassword: {
        color: colors.forgotPasswordColor,
        fontFamily: fonts.font,
        fontSize: rem(13),
    }, [`@media screen and (max-width: ${minWidth}px)`]: {
        card: {
            width: '330px',
        },
        svg2Style: {
            display: 'none',
        }, title: {

            fontSize: rem(16),
        },
        subtitle: {
            fontSize: rem(40),
        }, p: {
            fontSize: `${'14px'} `,
        },
        or: {
            display: 'none'
        },
    },
};

export const useLoginStyles = createUseStyles(styles);
