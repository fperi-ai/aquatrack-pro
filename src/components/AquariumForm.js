import { FaLeaf, FaFish, FaWater, FaSnowflake, FaStarfish, FaQuestion, FaTint, FaPlus } from 'react-icons/fa';

const typeOptions = [
    { value: 'Planted', icon: '🌿', label: 'Plantado' },
    { value: 'Community', icon: '🐟', label: 'Comunitario' },
    { value: 'Marine', icon: '🌊', label: 'Marino (solo peces)' },
    { value: 'Reef', icon: '🪸', label: 'Reef (marino con corales)' },
    { value: 'Brackish', icon: '💧', label: 'Agua salobre' },
    { value: 'Coldwater', icon: '❄️', label: 'Agua fría' },
    { value: 'Species-specific', icon: '🐠', label: 'Específico (ej: Betta, Gambas)' },
    { value: 'Other', icon: '❓', label: 'Otro' },
];

function renderTypeOption(option) {
    return `${option.label}`;
}

<div className="form-group" style={{width:'100%', boxSizing:'border-box', marginBottom: '12px'}}>
    <label style={{display: 'block', marginBottom: '4px'}}><FaLeaf style={{color:'#22c55e', marginRight:4}}/>Tipo</label>
    <select 
        value={type} 
        onChange={(e) => setType(e.target.value)}
        style={{width: '100%', boxSizing: 'border-box', padding: '10px 12px', margin: '0'}}
    >
        {typeOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.icon} {opt.label}</option>
        ))}
    </select>
</div>

<button 
    type="submit" 
    style={{
        width: '100%', 
        marginTop: '8px',
        position: 'relative',
        overflow: 'hidden'
    }}
    disabled={isSubmitting}
>
    {isSubmitting ? (
        <span style={{display: 'inline-block', animation: 'pulse 1s infinite'}}>Añadiendo...</span>
    ) : (
        <span><FaPlus style={{marginRight:6}}/>Añadir acuario</span>
    )}
</button> 