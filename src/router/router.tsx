import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import AuthComponent from 'core/layouts/auth/auth.component';
import LoginComponent from 'pages/login/login.component';
import NotfoundComponent from 'pages/not-found/notfound.component';
import SignUpComponent from 'pages/signup/signup.component';
import HomeComponent from 'pages/home/home.component';
import AuthProtectedComponent from './protected/auth-protected.component';
import PublicComponent from 'core/layouts/public/public.component';

const router = createBrowserRouter(
  [
    {
      element: (
        <AuthProtectedComponent layout='public'>
          <PublicComponent />
        </AuthProtectedComponent>
      ),
      children: [
        {
          path: Routes.home,
          element: <HomeComponent />,
        },
      ],
    },
    {
      path: Routes.auth,
      element: (
        <AuthProtectedComponent layout='auth'>
          <AuthComponent />
        </AuthProtectedComponent>
      ),
      children: [
        {
          path: Routes.login,
          element: <LoginComponent />,
        },
        {
          path: Routes.signup,
          element: <SignUpComponent />,
        },
      ],
    },
    {
      path: '*',
      element: <NotfoundComponent />,
    },
  ],
  { basename: '/' }
);

export default router;
