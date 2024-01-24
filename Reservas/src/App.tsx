import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Reservas from './pages/Reservas/Reservas'
import Navbar from './components/Navbar/Navbar'
import Checkout from './components/Checkout/Checkout'
import Opiniones from './components/Opiniones/Opiniones'
import Graficos from './pages/Graficos/Graficos'
import ClientesData from './components/Data/ClientesData/ClientesData'
import ServiciosData from './components/Data/ServiciosData/ServiciosData'
import IngresosData from './components/Data/IngresosData/IngresosData'
import TimeSelectorProvider from './context/TimeSelectorContext'

const App: React.FC = () => {

  return (
    <>
      <TimeSelectorProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservas/:titulo' element={<Reservas />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/opiniones' element={<Opiniones />} />
            <Route path='/grafico' element={<Graficos />} />
            <Route path='/clientes' element={<ClientesData />} />
            <Route path='/ingresos' element={<IngresosData />} />
            <Route path='/servicios' element={<ServiciosData />} />

          </Routes>

        </BrowserRouter>
      </TimeSelectorProvider>

    </>
  )
}

export default App
