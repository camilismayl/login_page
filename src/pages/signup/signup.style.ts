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
        maxWidth: '100%',
        padding: '0 20px'
    },
    card: {
        zIndex: '6',

        position: 'realative',
        boxShadow: '0px 4px 35px 0px rgba(0, 0, 0, 0.08)',
        borderRadius: '40px',
        width: '539px',
        height: '741px',
        padding: '20 0px'

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
    }, signuHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    haveAnAccount: {
        fontSize: rem(13),
        fontFamily: fonts.fontRegular,
        color: '#8D8D8D'
    }, username: {
        display: 'inline-block',
        marginRight: rem(39)
    }, contactNumber: {
        marginLeft: '40px',
        display: 'inline-block',
    },
    yellowSignIn: {
        fontSize: rem(13),
        fontFamily: fonts.fontRegular,
        color: colors.signInYellow
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
            padding: '0px'
        },
        page: { padding: '50 0px' },
        title: {

            fontSize: rem(16),
        },
        subtitle: {
            fontSize: rem(40),
        }, p: {
            fontSize: `${'14px'} `,
        },
        username: {
            display: 'inline-block',
            marginRight: '0px',
            maxWidth: '130px'
        },
        contactNumber: {
            maxWidth: '130px',
            marginLeft: '20px',

        }

    },
};

export const useSignUpStyles = createUseStyles(styles);
