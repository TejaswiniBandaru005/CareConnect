import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/styles.css"
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux';
import { store } from './redux/cartRedux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
