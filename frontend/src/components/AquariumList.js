import React from 'react';

function AquariumList({ aquariums }) {
    if (!aquariums || aquariums.length === 0) {
        return <p style={{color:'#888', marginTop:'24px', animation: 'fadeIn 0.5s ease-out'}}>No aquariums yet. Add one!</p>;
    }

    return (
        <div style={{animation: 'fadeIn 0.6s ease-out'}}>
            <h3 style={{color:'#2563eb', marginBottom:'18px', animation: 'fadeIn 0.7s ease-out'}}>My Aquariums</h3>
            {aquariums.map((aq, index) => (
                <div 
                    key={aq.id} 
                    className={`card-aquarium ${aq.isNew ? 'new-item' : ''}`}
                    style={{
                        animationDelay: `${0.2 + index * 0.15}s`,
                        opacity: 0,
                        animation: `${aq.isNew ? 'highlight 2s ease-out, ' : ''}slideInFromRight 0.5s ease-out forwards`,
                        transform: aq.isNew ? 'scale(1.02)' : 'scale(1)',
                        transition: 'transform 0.5s ease-out'
                    }}
                >
                    {aq.photoUrl && (
                        <img 
                            src={aq.photoUrl} 
                            alt={aq.name} 
                            onError={e => e.target.style.display='none'} 
                            style={{
                                transition: 'transform 0.3s ease',
                                animation: 'scaleIn 0.5s ease-out',
                                border: aq.isNew ? '2px solid var(--color-primary-light)' : 'none',
                                boxShadow: aq.isNew ? '0 0 15px var(--color-primary-light)' : 'none'
                            }}
                            onMouseOver={e => e.target.style.transform = 'scale(1.1)'}
                            onMouseOut={e => e.target.style.transform = 'scale(1)'}
                        />
                    )}
                    <div className="card-aquarium-details" style={{textAlign:'left', width:'100%'}}>
                        <h4 style={{
                            animation: 'fadeIn 0.6s ease-out',
                            color: aq.isNew ? 'var(--color-primary)' : 'var(--color-text)'
                        }}>
                            {aq.name}
                            {aq.isNew && <span style={{
                                marginLeft: '8px',
                                fontSize: '0.7em',
                                backgroundColor: 'var(--color-primary-light)',
                                color: 'white',
                                padding: '2px 6px',
                                borderRadius: '10px',
                                animation: 'pulse 1.5s infinite'
                            }}>Nuevo</span>}
                        </h4>
                        <p style={{animation: 'fadeIn 0.7s ease-out'}}><strong>Volumen:</strong> {aq.volume} L</p>
                        <p style={{animation: 'fadeIn 0.8s ease-out'}}><strong>Tipo:</strong> {aq.type}</p>
                        {aq.targetParameters && <p style={{animation: 'fadeIn 0.9s ease-out'}}><strong>Parámetros:</strong> {aq.targetParameters}</p>}
                        {aq.initialSetupNotes && <p style={{animation: 'fadeIn 1s ease-out'}}><strong>Notas:</strong> {aq.initialSetupNotes}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AquariumList; 