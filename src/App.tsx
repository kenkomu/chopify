import { useState } from 'react'


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AccountPage from './components/account';
import LoginPage from './components/auth/login';
import HomePage from './components/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
