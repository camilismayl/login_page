import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import { transition } from 'assets/styles/abstracts/mixins';
import sizes from 'assets/styles/abstracts/sizes';

const styles = {
    public: {
        background: 'linear-gradient(to right, #ECBC76 0%,#ECBC76 50%, #FFFEF9 0%,  #FFFEF9 50%)'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',



        // marginLeft: rem(sizes.leftMenu),
        // minHeight: 'calc(100vh - 50px) !important',
        // padding: rem(110) +' '+ rem(20) +' '+ rem(0),
        // transition: transition(),
    },
    active: { marginLeft: 0, },

};


export const usePublicLayoutStyles = createUseStyles(styles);
