import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Reservas from './pages/Reservas/Reservas'
import Navbar from './components/Navbar/Navbar'
import Checkout from './components/Checkout/Checkout'

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservas/:titulo' element={<Reservas />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
