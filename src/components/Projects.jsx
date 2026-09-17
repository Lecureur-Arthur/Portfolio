import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

function Projects() {
    // J'utilise le contexte de langue pour adapter le texte et le hook de navigation pour le routage.
    const { t } = useLanguage();
    const navigate = useNavigate();

    return (
        <section className="detail-container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingBottom: '3rem' }}>
            <div className="profile-header">
                <h1 style={{ margin: 0 }}>{t('proj_title')}</h1>
                <h2 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '400', margin: '0.5rem 0 0 0' }}>
                    {t('proj_subtitle')}
                </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                
                <div 
                    className="drama-card" 
                    onClick={() => navigate('/projets/solas')}
                    style={{ padding: '2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', transition: 'transform 0.2s, border-color 0.2s' }}
                >
                    <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.4rem', marginBottom: '1rem' }}>{t('proj_solas_title')}</h3>
                    <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{t('proj_solas_short')}</p>
                    <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.95rem', marginTop: '2rem', textAlign: 'right' }}>
                        {t('proj_discover')} →
                    </div>
                </div>

                <div 
                    className="drama-card" 
                    onClick={() => navigate('/projets/terrapolis')}
                    style={{ padding: '2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', transition: 'transform 0.2s, border-color 0.2s' }}
                >
                    <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.4rem', marginBottom: '1rem' }}>{t('proj_terrapolis_title')}</h3>
                    <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{t('proj_terrapolis_short')}</p>
                    <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.95rem', marginTop: '2rem', textAlign: 'right' }}>
                        {t('proj_discover')} →
                    </div>
                </div>

                <div 
                    className="drama-card" 
                    onClick={() => navigate('/projets/eddm')}
                    style={{ padding: '2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', transition: 'transform 0.2s, border-color 0.2s' }}
                >
                    <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.4rem', marginBottom: '1rem' }}>{t('proj_eddm_title')}</h3>
                    <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{t('proj_eddm_short')}</p>
                    <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.95rem', marginTop: '2rem', textAlign: 'right' }}>
                        {t('proj_discover')} →
                    </div>
                </div>

                <div 
                    className="drama-card" 
                    onClick={() => navigate('/projets/collectomangas')}
                    style={{ padding: '2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', transition: 'transform 0.2s, border-color 0.2s' }}
                >
                    <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.4rem', marginBottom: '1rem' }}>{t('proj_collectomangas_title')}</h3>
                    <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{t('proj_collectomangas_short')}</p>
                    <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.95rem', marginTop: '2rem', textAlign: 'right' }}>
                        {t('proj_discover')} →
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;