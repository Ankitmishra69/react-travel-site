import './assets/css/style.css';
import './assets/css/fonts.css'
import { Routes, Route } from "react-router-dom";
import { Service } from './routes/Service'
import { About } from './routes/About'
import { Contact } from './routes/Contact'
import { Home } from './routes/Home'



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </div>
  );
}

