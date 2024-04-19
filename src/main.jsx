import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import AppRouteur from './router/AppRouteur.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <Provider store={store}>
    {/*router pour gérer les urls */}
    <AppRouteur />   
     </Provider>
     </AuthContextProvider>
  </React.StrictMode>,
)
