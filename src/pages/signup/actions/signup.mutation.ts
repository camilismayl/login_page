import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ISignUPFormValues } from '../signup';
import { store } from '../../../store/store.config';
import { setUser } from '../../../store/store.reducer';
import { Routes } from '../../../router/routes';
import { signup } from './signup.service';

export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: ISignUPFormValues) => {
      return signup(credentials);
    },
    onSuccess: response => {
      console.log(response.token);
      store.dispatch(setUser(response));
      navigate(Routes.login);
    },
    onError: error => {
      console.error('Error happened', error);
    },
  });
};
