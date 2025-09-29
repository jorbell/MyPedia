import { createRoot }  from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <HashRouter>
        <App />
      </HashRouter>
  </QueryClientProvider>
);
