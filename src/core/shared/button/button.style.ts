import colors from 'assets/styles/abstracts/color';
import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';

import fonts from 'assets/styles/abstracts/fonts';

const styles = {
    logOut: {
        backgroundColor: colors.signInButton,
        fontSize: rem(16),
        fontFamily: fonts.font,
        height: `${'54px'}!important`,
        color: colors.buttonTextColor, width: '450px',

        '&:hover': {
            backgroundColor: `${colors.signInButton} !important`,
            borderColor: 'transparent !important',
            opacity: 0.8,

        },
    },
    signIn: {
        backgroundColor: colors.signInButton,
        fontSize: rem(16),
        fontFamily: fonts.font,
        height: `${'54px'}!important`,
        color: colors.buttonTextColor,
        '&:hover': {
            backgroundColor: `${colors.signInButton} !important`,
            borderColor: 'transparent !important',
            opacity: 0.8,
        },
    },
    signUp: {
        backgroundColor: colors.signUpButton,
        fontSize: rem(16),
        fontFamily: fonts.font,
        color: colors.signUpButtonTextColor,
        height: `${'54px'}!important`,

        '&:hover': {
            backgroundColor: `${colors.signUpButton} !important`,
            borderColor: 'transparent !important',
            color: `${colors.signUpButtonTextColor} !important`,
            opacity: 0.8,
        },
    },
};

export const useLoginStyles = createUseStyles(styles);
