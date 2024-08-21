import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import GlobalStyle from './utils/style/GlobalStyle'

import Header from './components/Header'

import Home from './pages/Home'
import { DataContextProvider } from './utils/context/DataContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/user/:userId"
          element={
            <DataContextProvider>
              <Home />
            </DataContextProvider>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
)
