import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from './newredux/storeNew'
import MainContent from './components/MainContent'
import Display from './components/Display'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Provider } from 'react-redux'
import ProfileNames from './components/ProfileNames.jsx'

// console.log(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/display/:id" element={<Display />} />
        <Route path='/profilenames' element={<ProfileNames />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // <Provider store={abcstore}><App /></Provider>

)