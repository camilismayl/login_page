
import poppinsBold from '../../fonts/Poppins/Poppins-Bold.ttf';
import poppinsLight from '../../fonts/Poppins/Poppins-Light.ttf';
import poppinsRegular from '../../fonts/Poppins/Poppins-Regular.ttf';
import poppinsThin from '../../fonts/Poppins/Poppins-ExtraLight.ttf';
import poppinsXBlack from '../../fonts/Poppins/Poppins-ExtraBold.ttf';
import poppinsMedium from '../../fonts/Poppins/Poppins-Medium.ttf';
const typography = {
  '@font-face': [
    {
      fontFamily: 'Poppins Bold',
      src: `url("${poppinsBold}")`,
    },
    {
      fontFamily: 'Poppins Light',
      src: `url("${poppinsLight}")`,
    },
    {
      fontFamily: 'Poppins Medium',
      src: `url("${poppinsMedium}")`,
    },
    {
      fontFamily: 'Poppins Regular',
      src: `url("${poppinsRegular}")`,
    },
    {
      fontFamily: 'Poppins Thin',
      src: `url("${poppinsThin}")`,
    },
    {
      fontFamily: 'Poppins XBlack',
      src: `url("${poppinsXBlack}")`,
    }
  ],
};

export default typography;
