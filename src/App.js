
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import EventsPage from './components/EventsPage';
import TeamPage from './components/TeamPage';
import LinksPage from './components/LinksPage';
import SponsorsPage from './components/SponsorsPage';
import GoogleFormPage from './components/GoogleFormPage';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        
          <Routes>

            <Route  path="/" element={<HomePage />}  />
            <Route  path="/about" element={<AboutPage />}  />
            <Route  path="/events" element={<EventsPage />}  />
            <Route  path="/team" element={<TeamPage />}  />
            <Route  path="/links" element={<LinksPage />}  />
            <Route path='/sponsors' element={<SponsorsPage />} />
            <Route path='/signup' element={<GoogleFormPage />} />


          </Routes>

        
        
      </main>
    </div>
  );
}

export default App;
