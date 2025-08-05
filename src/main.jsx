import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { TabProvider } from './util/TabContext.jsx'
import { store } from './app/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TabProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </TabProvider>
  </StrictMode>,
)
