import { Card, Form, Input } from 'antd';
import { useSignUpStyles } from './signup.style';
import { useMemo, useState, useCallback } from 'react';
import useLocalization from 'assets/lang';
import { FormRule } from 'antd';
import { ISignUPFormValues } from './signup';
import ButtonComponent from 'core/shared/button/button.component';
import { Link } from 'react-router-dom';
import { useSignup } from './actions/signup.mutation';
const SignUpComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { mutate, isLoading } = useSignup();

  const translate = useLocalization();

  const {
    title,
    page,
    subtitle,
    card,
    p,
    input,
    placeholder,
    forgotPassword,
    or,
    signuHeader,
    haveAnAccount,
    yellowSignIn,
    username,
    contactNumber,
  } = useSignUpStyles();
  const initialValues: ISignUPFormValues = {
    email: '',
    username: '',
    password: '',
    number: '',
  };

  const onSubmit = useCallback(
    (values: ISignUPFormValues) => {
      mutate(values);
    },
    [mutate]
  );
  const rules: { [key: string]: FormRule[] } = useMemo(
    () => ({
      email: [
        {
          required: true,
          message: translate('input_required'),
        },
        {
          // add a pattern for email regex
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: translate('email_invalid'),
        },
      ],
      password: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
    }),
    [translate]
  );
  return (
    <div className={`${page} py-50 d-flex justify-center align-center `}>
      <div>
        <Card className={`${card} py-26`}>
          <div className={`${signuHeader} mb-38`}>
            <div>
              <h1 className={title}>{translate('welcome_to')}</h1>
              <p className={subtitle}>{translate('sign_in')} </p>
            </div>
            <div>
              <h1 className={haveAnAccount}>{translate('have_an_account')}</h1>
              <Link to='/auth/login'>
                <p className={yellowSignIn}>{translate('sign_in')} </p>
              </Link>
            </div>
          </div>
          <Form
            onFinish={onSubmit}
            name='login'
            initialValues={initialValues}
            layout='vertical'
            size='large'
          >
            <Form.Item
              name='email'
              rules={rules.email}
              label={<p className={p}>Enter your username or email address</p>}
            >
              <Input
                placeholder='Username or email address'
                className={`${input} ${'pl-25'} ${placeholder}`}
                type='email'
              />
            </Form.Item>
            <Form.Item
              name='username'
              className={username}
              label={<p className={p}>User Name</p>}
            >
              <Input
                placeholder='User Name'
                type='username'
                name='username'
                className={`${input} ${'pl-25'} ${placeholder}`}
              />
            </Form.Item>
            <Form.Item
              name='number'
              className={contactNumber}
              label={<p className={p}>Contact Number</p>}
            >
              <Input
                placeholder='Contact Number'
                className={`${input} ${'pl-25'} ${placeholder}`}
              />
            </Form.Item>
            <Form.Item
              rules={rules.password}
              className='mb-55'
              label={<p className={p}>Enter your Password</p>}
              name='password'
            >
              <Input.Password
                placeholder='Password'
                className={`${input} ${'pl-25'} ${placeholder}`}
                type='password'
              />
            </Form.Item>

            <div>
              <ButtonComponent
                className='w-100'
                type='signIn'
                htmlType='submit'
                loading={isLoading}
              >
                {translate('sign_up')}
              </ButtonComponent>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default SignUpComponent;
