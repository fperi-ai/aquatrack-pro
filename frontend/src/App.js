import React, { useState, useEffect } from 'react';
import './App.css';
import AquariumForm from './components/AquariumForm';
import AquariumList from './components/AquariumList';

const getSystemTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

function App() {
  const [aquariums, setAquariums] = useState([]);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'system';
  });
  const [newAquariumId, setNewAquariumId] = useState(null);

  // Aplica la clase de tema al body con transición
  useEffect(() => {
    let appliedTheme = theme;
    if (theme === 'system') {
      appliedTheme = getSystemTheme();
    }
    
    // Añadir clase de transición antes de cambiar el tema
    document.body.classList.add('theme-transition');
    
    // Eliminar clases de tema anteriores y aplicar la nueva
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${appliedTheme}`);
    
    // Eliminar la clase de transición después de un tiempo
    const timer = setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 500);
    
    return () => clearTimeout(timer);
  }, [theme]);

  // Cambia el tema si el sistema cambia y el usuario tiene "system"
  useEffect(() => {
    if (theme === 'system') {
      const listener = (e) => {
        document.body.classList.add('theme-transition');
        document.body.classList.remove('theme-dark', 'theme-light');
        document.body.classList.add(`theme-${e.matches ? 'dark' : 'light'}`);
        
        setTimeout(() => {
          document.body.classList.remove('theme-transition');
        }, 500);
      };
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);
      return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
    }
  }, [theme]);

  // Efecto para marcar el nuevo acuario añadido
  useEffect(() => {
    if (newAquariumId) {
      const timer = setTimeout(() => {
        setNewAquariumId(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [newAquariumId]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    localStorage.setItem('theme', e.target.value);
  };

  const handleAquariumCreate = (newAquarium) => {
    setAquariums(prevAquariums => [...prevAquariums, newAquarium]);
    setNewAquariumId(newAquarium.id);
  };

  return (
    <div className="App">
      <div className="theme-switch">
        <label>
          <span role="img" aria-label="Claro">🌞</span>
          <input type="radio" name="theme" value="light" checked={theme === 'light'} onChange={handleThemeChange} />
        </label>
        <label>
          <span role="img" aria-label="Oscuro">🌚</span>
          <input type="radio" name="theme" value="dark" checked={theme === 'dark'} onChange={handleThemeChange} />
        </label>
        <label>
          <span role="img" aria-label="Sistema">🖥️</span>
          <input type="radio" name="theme" value="system" checked={theme === 'system'} onChange={handleThemeChange} />
        </label>
      </div>
      <header className="App-header">
        <h1>AquaTrack Pro</h1>
      </header>
      <main style={{ 
        padding: '32px 16px', 
        maxWidth: '520px', 
        margin: '0 auto',
        background: 'var(--color-card)',
        borderRadius: '24px',
        boxShadow: '0 4px 32px 0 var(--color-shadow)',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        {/* <h2>Contenido Principal - Texto de Prueba</h2> */}
        <AquariumForm onAquariumCreate={handleAquariumCreate} />
        <AquariumList 
          aquariums={aquariums.map(aq => ({
            ...aq,
            isNew: aq.id === newAquariumId
          }))} 
        />
      </main>
    </div>
  );
}

export default App;
