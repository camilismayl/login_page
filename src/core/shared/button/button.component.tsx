import React from 'react';
import { Button } from 'antd';
import { useLoginStyles } from './button.style';
export default function ButtonComponent({ children, type, onClick }: any) {
  const { signIn, signUp, logOut } = useLoginStyles();
  const buttonStyle =
    type === 'signIn' ? signIn : type === 'signUp' ? signUp : logOut;

  return (
    <Button
      type='primary'
      htmlType='submit'
      block
      className={buttonStyle}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
