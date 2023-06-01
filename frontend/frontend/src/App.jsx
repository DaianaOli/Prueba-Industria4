import Inicio from './componentes/Inicio/Inicio'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
    );
}



