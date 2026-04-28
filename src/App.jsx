import Game from './components/pages/Game.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { SettingsProvider } from './components/SettingsContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/pages/Home.jsx';
import Dashboard from './components/pages/Dashboard.jsx';
import MentalHealth from './components/pages/MentalHealth.jsx';
import Profile from './components/pages/Profile.jsx';
import Settings from './components/pages/Settings.jsx';

function App() {
  return (
    <BrowserRouter>
      <SettingsProvider>
        <div className="bg-slate-950 min-h-screen text-slate-100">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={
                <Home
                  athleteName="Cami"
                  sport="Track & Field"
                  school="Tuskegee University"
                  bio="Student athlete, creative, and future computer scientist based in Oakland."
                />
              } />
              <Route path="/dashboard" element={<Dashboard athleteName="Cami" />} />
              <Route path="/mental-health" element={<MentalHealth athleteName="Cami" />} />
              <Route path="/profile" element={
                <Profile
                  athleteName="Cami"
                  sport="Track & Field"
                  school="Tuskegee University"
                  position="Sprinter / Captain"
                  bio="Student athlete, creative, and future computer scientist based in Oakland."
                />
              } />
              <Route path="/settings" element={<Settings />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </SettingsProvider>
    </BrowserRouter>
  );
}

export default App;