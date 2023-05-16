import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import Routers from './routes/routers';
import { GlobalStyled } from './styles/globalStyle';
import theme from './styles/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <ToastContainer limit={1}/>
        <Routers />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
