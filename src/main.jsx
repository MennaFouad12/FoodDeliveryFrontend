import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
import AuthProvider from './context/authContext.jsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <QueryClientProvider client={queryClient}>
<StoreContextProvider>
  <AuthProvider>
  <App />
  </AuthProvider>
  </StoreContextProvider>
  </QueryClientProvider>
</BrowserRouter>
  


)
