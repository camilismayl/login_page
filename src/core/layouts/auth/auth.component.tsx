import { Outlet } from 'react-router-dom';
import { useAuthStyles } from './auth.style';
import svg2 from '../../../assets/images/statics/Saly-2.png';
import svg3 from '../../../assets/images/statics/Saly-3.png';
const AuthComponent = () => {
  const { auth, svg3Style, svg2Style, border, heading } = useAuthStyles();

  return (
    <>
      <div className={auth}>
        <h1 className={heading}>Your Logo</h1>
        <div className={svg3Style}>
          <img src={svg3} alt='' />
          <div className={border}></div>
        </div>
        <Outlet />
        <div className={svg2Style}>
          <img src={svg2} alt='' />
        </div>
      </div>
    </>
  );
};

export default AuthComponent;
