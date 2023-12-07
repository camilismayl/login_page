import ButtonComponent from 'core/shared/button/button.component';
import { useHomeStyles } from './home.style';
import { useStore } from '../../store/store.config';
import { removeToken } from '../../core/helpers/get-token';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../router/routes';

export default function HomeComponent() {
  const { welcome, details, detailsText, welcomeText, userText } =
    useHomeStyles();
  const user = useStore('user');
  const navigate = useNavigate();

  return (
    <div className={welcome}>
      <div className={details}>
        <div className={detailsText}>
          <p className={welcomeText}>Welcome</p>
          <p className={userText}>{user}</p>{' '}
        </div>
        <ButtonComponent
          type='logOut'
          htmlType='submit'
          onClick={() => {
            removeToken();
            navigate(Routes.login);
          }}
        >
          Log Out {/* {translate('login_sign_in_button')} */}
        </ButtonComponent>
      </div>
    </div>
  );
}
