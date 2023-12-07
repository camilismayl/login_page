import { useNavigate } from 'react-router-dom';
import { ILoginFormValues } from '../login';
import { useMutation } from 'react-query';
import { login } from './login.service';
import { store } from '../../../store/store.config';
import { setUser } from '../../../store/store.reducer';
import { setToken } from '../../../core/helpers/get-token';
import { Routes } from '../../../router/routes';

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: ILoginFormValues) => {
      return login(credentials);
    },
    onSuccess: response => {
      console.log(response.token);
      console.log(response.email);
      setToken(response.accessToken);
      console.log(response);
      store.dispatch(setUser(response.email));
      navigate(Routes.home);
    },
    onError: error => {
      console.error('Error happened:', error);
    },
  });
};
