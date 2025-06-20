import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom' // for page routing (npm install react-router-dom)
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> {/* allows the app to use '/' routing e.g. /favorites */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
