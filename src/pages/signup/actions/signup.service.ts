import { ISignUPFormValues } from '../signup';
import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';

export const signup = (
  credentials: ISignUPFormValues
): Promise<{ token: any }> => {
  return axiosInstance.post(API.post, credentials).then((res) => {
    console.log(res.data);
    return res.data;
  });
};
