import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { TabProvider } from './util/TabContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TabProvider>
      <App />
    </TabProvider>
  </StrictMode>,
)
