import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';

<div className="theme-switch">
  <label>
    <FaSun style={{color:'#fbbf24', marginRight:4}} title="Claro" />
    <input type="radio" name="theme" value="light" checked={theme === 'light'} onChange={handleThemeChange} />
  </label>
  <label>
    <FaMoon style={{color:'#2563eb', marginRight:4}} title="Oscuro" />
    <input type="radio" name="theme" value="dark" checked={theme === 'dark'} onChange={handleThemeChange} />
  </label>
  <label>
    <FaDesktop style={{color:'#64748b', marginRight:4}} title="Sistema" />
    <input type="radio" name="theme" value="system" checked={theme === 'system'} onChange={handleThemeChange} />
  </label>
</div> 