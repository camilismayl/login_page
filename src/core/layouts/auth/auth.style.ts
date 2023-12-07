import { createUseStyles } from 'react-jss';
import fonts from 'assets/styles/abstracts/fonts';
import colors from 'assets/styles/abstracts/color';
const minWidth = 1200;

const styles = {
    auth: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        // width: '100vh',
        height: '100vh',

        background:
            'linear-gradient(to right, #ECBC76 0%,#ECBC76 50%, #FFFEF9 0%,  #FFFEF9 50%)',
    },
    svg3Style: { top: '217px', left: '190px', position: 'fixed', zIndex: '1' },
    svg2Style: { top: '100px', right: '100px', position: 'fixed', zIndex: '1' },
    border: {
        marginTop: '-4px',
        width: '300px',
        height: '1px',
        background: 'black',
    },
    heading: {
        position: 'absolute',
        top: '31px',
        left: '42px',
        color: colors.header,
        font: fonts.fontBold,
        fontSize: '20px',
    },
    [`@media screen and (max-width: ${minWidth}px)`]: {
        svg3Style: {
            display: 'none',
        },
        svg2Style: {
            display: 'none',
        },
    },
    // section: {
    //     minHeight: '100vh',
    // },
    // wrapper: {
    //     minHeight: '100vh',
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    // },
    // pageSection: {
    // },
    // panel: {width: rem(480),},
    // or: {color: colors.authSubtitleText,},
    // invalidField: {border: '1px solid ' + colors.validationErrorColor,},
};

export const useAuthStyles = createUseStyles(styles);
