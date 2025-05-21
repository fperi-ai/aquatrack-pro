import { FaLeaf, FaFish, FaWater, FaSnowflake, FaStarfish, FaQuestion, FaTint } from 'react-icons/fa';

// Función para devolver el icono según el tipo de acuario
const getTypeIcon = (type) => {
    switch(type) {
        case 'Planted': return <FaLeaf title="Plantado" style={{color:'#22c55e', marginRight:4}} />;
        case 'Community': return <FaFish title="Comunitario" style={{color:'#2563eb', marginRight:4}} />;
        case 'Marine': return <FaWater title="Marino" style={{color:'#0ea5e9', marginRight:4}} />;
        case 'Reef': return <FaStarfish title="Reef" style={{color:'#fbbf24', marginRight:4}} />;
        case 'Brackish': return <FaTint title="Salobre" style={{color:'#a3e635', marginRight:4}} />;
        case 'Coldwater': return <FaSnowflake title="Agua fría" style={{color:'#38bdf8', marginRight:4}} />;
        case 'Species-specific': return <FaFish title="Específico" style={{color:'#f472b6', marginRight:4}} />;
        default: return <FaQuestion title="Otro" style={{color:'#64748b', marginRight:4}} />;
    }
};

<p style={{animation: 'fadeIn 0.8s ease-out'}}><strong>Tipo:</strong> {getTypeIcon(aq.type)}{aq.type}</p>

{aq.targetParameters && <p style={{animation: 'fadeIn 0.9s ease-out'}}><strong><FaTint style={{color:'#2563eb', marginRight:4}} />Parámetros:</strong> {aq.targetParameters}</p>} 