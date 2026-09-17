import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Terrapolis from './components/projects/Terrapolis';
import Eddm from './components/projects/Eddm';
import CollectoMangas from './components/projects/CollectoMangas';

// J'importe le composant principal des projets ainsi que les pages de détails que je viens de créer.
import Projects from './components/Projects'; 
import Solas from './components/projects/Solas';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          Arthur<span>LECUREUR</span>
        </div>
        
        <div className="sidebar-divider"></div>
        <div className="menu-label">{t('nav_main_menu')}</div>
        
        <button className={`nav-btn ${isActive('/accueil') ? 'active' : ''}`} onClick={() => navigate('/accueil')}>
          {t('nav_home')}
        </button>
        <button className={`nav-btn ${isActive('/a-propos') ? 'active' : ''}`} onClick={() => navigate('/a-propos')}>
          {t('nav_about')}
        </button>
        <button className={`nav-btn ${isActive('/projets') ? 'active' : ''}`} onClick={() => navigate('/projets')}>
          {t('nav_projects')}
        </button>
        <button className={`nav-btn ${isActive('/experience') ? 'active' : ''}`} onClick={() => navigate('/experience')}>
          {t('nav_experience')}
        </button>

        <div style={{ flex: 1 }}></div>
        <div className="sidebar-divider"></div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', padding: '0.5rem 0', alignItems: 'center' }}>
          <button 
            onClick={() => setLanguage('fr')} 
            style={{ 
              background: 'transparent', border: 'none', cursor: 'pointer', 
              opacity: language === 'fr' ? 1 : 0.3,
              transition: 'opacity 0.2s', padding: 0, display: 'flex', alignItems: 'center'
            }}
            title="Passer en Français"
          >
            <svg width="32" height="24" viewBox="0 0 900 600" style={{ borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
              <rect width="300" height="600" fill="#002395"/>
              <rect x="300" width="300" height="600" fill="#ffffff"/>
              <rect x="600" width="300" height="600" fill="#ed2939"/>
            </svg>
          </button>
          <button 
            onClick={() => setLanguage('en')} 
            style={{ 
              background: 'transparent', border: 'none', cursor: 'pointer', 
              opacity: language === 'en' ? 1 : 0.3,
              transition: 'opacity 0.2s', padding: 0, display: 'flex', alignItems: 'center'
            }}
            title="Switch to English"
          >
            <svg width="32" height="24" viewBox="0 0 60 30" style={{ borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
              <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z"/>
              </clipPath>
              <clipPath id="t">
                <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
              </clipPath>
              <g clipPath="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
              </g>
            </svg>
          </button>
        </div>
      </aside>

      <main className="main-content">
        <Routes>
            <Route path="/" element={<Navigate to="/accueil" replace />} />
            <Route path="/accueil" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            
            <Route path="/projets" element={<Projects />} />
            <Route path="/projets/solas" element={<Solas />} />
            <Route path="/projets/terrapolis" element={<Terrapolis />} />
            <Route path="/projets/eddm" element={<Eddm />} />
            <Route path="/projets/collectomangas" element={<CollectoMangas />} />
        </Routes>
      </main>
    </div>
  );
}