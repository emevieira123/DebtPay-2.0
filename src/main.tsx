import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { themeComponents } from './theme/themeComponents.ts'

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={themeComponents}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </QueryClientProvider>
)
