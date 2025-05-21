import React, { useState } from 'react';

function AquariumForm({ onAquariumCreate }) {
    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [volume, setVolume] = useState('');
    const [type, setType] = useState('Planted');
    const [targetParameters, setTargetParameters] = useState(''); 
    const [initialSetupNotes, setInitialSetupNotes] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !volume) {
            setError('El nombre y el volumen son obligatorios.');
            return;
        }
        
        setIsSubmitting(true);
        setError('');
        
        // Simulamos una breve espera para mostrar la animación
        setTimeout(() => {
            const newAquarium = {
                id: Date.now().toString(), 
                name,
                photoUrl,
                volume: parseFloat(volume),
                type,
                targetParameters,
                initialSetupNotes
            };
            
            onAquariumCreate(newAquarium);
            
            // Mostrar animación de éxito
            setSubmitSuccess(true);
            
            // Resetear formulario después de un breve momento
            setTimeout(() => {
                setName('');
                setPhotoUrl('');
                setVolume('');
                setType('Planted');
                setTargetParameters('');
                setInitialSetupNotes('');
                setIsSubmitting(false);
                setSubmitSuccess(false);
            }, 800);
        }, 400);
    };

    return (
        <form onSubmit={handleSubmit} style={{ 
            marginBottom: '28px', 
            background: 'rgba(255,255,255,0.85)', 
            borderRadius: '18px', 
            boxShadow: '0 2px 12px 0 rgba(79,140,255,0.07)', 
            padding: '18px 16px',
            boxSizing: 'border-box',
            width: '100%',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {submitSuccess && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(52, 211, 153, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10,
                    animation: 'fadeIn 0.3s ease-out'
                }}>
                    <div style={{
                        backgroundColor: 'rgba(52, 211, 153, 0.9)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '12px',
                        fontWeight: '600',
                        animation: 'scaleIn 0.4s ease-out'
                    }}>
                        ¡Acuario añadido con éxito!
                    </div>
                </div>
            )}
            
            <h3 style={{textAlign: 'center', marginBottom: '16px'}}>Nuevo Acuario</h3>
            {error && <div style={{color:'#e11d48', marginBottom:'12px', fontWeight:500, fontSize:'1rem', animation: 'fadeIn 0.3s ease-out'}}>{error}</div>}
            <div className="form-group" style={{width:'100%', boxSizing:'border-box', marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Nombre</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Ej: Acuario principal" 
                    required 
                    style={{width: '100%', boxSizing: 'border-box', padding: '10px 12px', margin: '0'}}
                />
            </div>
            <div className="form-group" style={{width:'100%', boxSizing:'border-box', marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>URL de la foto</label>
                <input 
                    type="text" 
                    value={photoUrl} 
                    onChange={(e) => setPhotoUrl(e.target.value)} 
                    placeholder="https://..." 
                    style={{width: '100%', boxSizing: 'border-box', padding: '10px 12px', margin: '0'}}
                />
            </div>
            <div className="form-group" style={{width:'100%', boxSizing:'border-box', marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Volumen (litros)</label>
                <input 
                    type="number" 
                    value={volume} 
                    onChange={(e) => setVolume(e.target.value)} 
                    min="1" 
                    step="0.1" 
                    placeholder="Ej: 120" 
                    required 
                    style={{width: '100%', boxSizing: 'border-box', padding: '10px 12px', margin: '0'}}
                />
            </div>
            <div className="form-group" style={{width:'100%', boxSizing:'border-box', marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Tipo</label>
                <select 
                    value={type} 
                    onChange={(e) => setType(e.target.value)}
                    style={{width: '100%', boxSizing: 'border-box', padding: '10px 12px', margin: '0'}}
                >
                    <option value="Planted">Plantado</option>
                    <option value="Community">Comunitario</option>
                    <option value="Marine">Marino (solo peces)</option>
                    <option value="Reef">Reef (marino con corales)</option>
                    <option value="Brackish">Agua salobre</option>
                    <option value="Coldwater">Agua fría</option>
                    <option value="Species-specific">Específico (ej: Betta, Gambas)</option>
                    <option value="Other">Otro</option>
                </select>
            </div>
            <div className="form-group" style={{width:'100%', boxSizing:'border-box', marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Parámetros objetivo</label>
                <input 
                    type="text" 
                    value={targetParameters} 
                    onChange={(e) => setTargetParameters(e.target.value)} 
                    placeholder="Ej: pH 7, Temp 25ºC" 
                    style={{width: '100%', boxSizing: 'border-box', padding: '10px 12px', margin: '0'}}
                />
            </div>
            <div className="form-group" style={{width:'100%', boxSizing:'border-box', marginBottom: '12px'}}>
                <label style={{display: 'block', marginBottom: '4px'}}>Notas de configuración inicial</label>
                <textarea 
                    value={initialSetupNotes} 
                    onChange={(e) => setInitialSetupNotes(e.target.value)} 
                    placeholder="Observaciones, equipamiento, etc."
                    style={{width: '100%', boxSizing: 'border-box', padding: '10px 12px', margin: '0', minHeight: '80px'}} 
                />
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
                    <span>Añadir acuario</span>
                )}
            </button>
        </form>
    );
}

export default AquariumForm; 