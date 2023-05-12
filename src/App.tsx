import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import Routers from './routes/routers';
import { GlobalStyled } from './styles/globalStyle';
import theme from './styles/theme';


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
        <Routers />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
