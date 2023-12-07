import './App.scss';
import router from './router/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import useGlobalStyles from 'assets/styles/style';
import AuthComponent from 'core/layouts/auth/auth.component';
import { RouterProvider } from 'react-router-dom';
const queryClient = new QueryClient();

function App() {
  useGlobalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <RouterProvider router={router} />
      </div>{' '}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
