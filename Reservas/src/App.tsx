import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Reservas from './pages/Reservas/Reservas'
import Navbar from './components/Navbar/Navbar'
import Checkout from './components/Checkout/Checkout'
import Opiniones from './components/Opiniones/Opiniones'
import Graficos from './pages/Graficos/Graficos'

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservas/:titulo' element={<Reservas />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/opiniones' element={<Opiniones />} />
          <Route path='/grafico' element={<Graficos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
