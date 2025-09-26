import { createRoot }  from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalStateProvider } from './state/GlobalState';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStateProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </GlobalStateProvider>
  </QueryClientProvider>
);
