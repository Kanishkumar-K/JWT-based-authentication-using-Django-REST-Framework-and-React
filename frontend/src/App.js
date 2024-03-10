import React from 'react'
import "./app.scss"
import About from './pages/About'
import Products from './pages/Products'
import Contacts from './pages/Contacts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from "./utils/ProtectedRoute"
import { AuthProvider } from './context/AuthContext'
import {Dashboard, Home, Login, Register} from "./pages"



const App = () => {
  return (
    <div className='App'>
        <div className='container'>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route 
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" exact element={<Home />} />
                        <Route path="/about" exact element={<About />} />
                        <Route path="/products" exact element={<Products/>} />
                        <Route path="/contacts" exact element={<Contacts />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    </div>
  )
}

export default App