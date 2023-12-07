import { ILoginFormValues } from '../login';
import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';

export const login = (credentials: ILoginFormValues): Promise<any> => {
  return axiosInstance
    .get(API.post)
    .then(res => {
      const filteredUsers = res.data.filter(
        (user: any) => user.email === credentials.email
      );

      for (const user of filteredUsers) {
        if (user.password === credentials.password) {
          console.log(credentials, user);
          return user;
        }
      }
      return null;
    })
    .catch(error => {
      throw new Error(error);
    });
};