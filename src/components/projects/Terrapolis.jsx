import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

// J'importe précisément les images d'illustration en respectant la casse des fichiers sources.
import imgGamePyBase from '../../assets/PROJECTS/TERRAPOLIS/GamePyBase.jpg';
import imgGamePyProj1 from '../../assets/PROJECTS/TERRAPOLIS/GamePyProjection_1.jpg';
import imgGamePyProj2 from '../../assets/PROJECTS/TERRAPOLIS/GamePyProjection_2.jpg';
import imgMaquette1 from '../../assets/PROJECTS/TERRAPOLIS/Maquette_1.jpg';
import imgMaquette2 from '../../assets/PROJECTS/TERRAPOLIS/Maquette_2.jpg';

function Terrapolis() {
    const { t } = useLanguage();
    const navigate = useNavigate();

    // Je configure les styles de mes conteneurs pour garantir une présentation soignée et responsive.
    const bannerFigureStyle = {
        margin: '0 auto 2rem auto',
        maxWidth: '850px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const baseImageStyle = {
        width: '100%',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    };

    const gridImageStyle = {
        width: '100%',
        borderRadius: '8px',
        border: '1px solid var(--border-color)'
    };

    const captionStyle = {
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        textAlign: 'center',
        marginTop: '0.8rem'
    };

    const videoContainerStyle = {
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    };

    const iframeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    };

    return (
        <section className="detail-container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '3rem' }}>
            <button 
                onClick={() => navigate('/projets')}
                style={{ alignSelf: 'flex-start', background: 'transparent', color: 'var(--text-muted)', border: 'none', cursor: 'pointer', padding: 0, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
                ← {t('proj_back')}
            </button>

            <div>
                <div className="profile-header">
                    <h1 style={{ margin: 0 }}>{t('terrapolis_page_title')}</h1>
                    <h2 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '400', margin: '0.5rem 0 2rem 0' }}>
                        {t('terrapolis_page_subtitle')}
                    </h2>
                </div>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('terrapolis_concept_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem', lineHeight: '1.8' }}>{t('terrapolis_concept_desc')}</p>
                <figure style={bannerFigureStyle}>
                    <img src={imgGamePyBase} alt="Logique Python de Terrapolis" style={baseImageStyle} />
                    <figcaption style={captionStyle}>{t('terrapolis_caption_base')}</figcaption>
                </figure>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('terrapolis_proj_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem', lineHeight: '1.8' }}>{t('terrapolis_proj_desc')}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <img src={imgGamePyProj1} alt="Projection de la carte" style={gridImageStyle} />
                        <figcaption style={captionStyle}>{t('terrapolis_caption_proj')}</figcaption>
                    </figure>
                    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <img src={imgGamePyProj2} alt="Projection sous un autre angle" style={gridImageStyle} />
                    </figure>
                </div>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('terrapolis_ar_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem', lineHeight: '1.8' }}>{t('terrapolis_ar_desc')}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <img src={imgMaquette1} alt="Maquette physique" style={gridImageStyle} />
                    </figure>
                    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <img src={imgMaquette2} alt="Application AR sur smartphone" style={gridImageStyle} />
                        <figcaption style={captionStyle}>{t('terrapolis_caption_maquette')}</figcaption>
                    </figure>
                </div>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('terrapolis_video_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem' }}>{t('terrapolis_video_desc')}</p>
                <div style={videoContainerStyle}>
                    <iframe 
                        style={iframeStyle}
                        src="https://www.youtube.com/embed/CVixVq6lf0w" 
                        title="Démonstration Terrapolis" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('terrapolis_res_title')}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <a href="https://github.com/Lecureur-Arthur/Terrapolis_Python" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="drama-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', transition: 'transform 0.2s, border-color 0.2s', height: '100%' }}>
                            <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.4rem', marginBottom: '1rem' }}>{t('terrapolis_res_github_python_title')}</h3>
                            <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{t('terrapolis_res_github_python_desc')}</p>
                            <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.95rem', marginTop: '2rem', textAlign: 'right' }}>
                                {t('terrapolis_res_github_link')} →
                            </div>
                        </div>
                    </a>
                    
                    <a href="https://github.com/Lecureur-Arthur/Terrapolis_Unity" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="drama-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', transition: 'transform 0.2s, border-color 0.2s', height: '100%' }}>
                            <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.4rem', marginBottom: '1rem' }}>{t('terrapolis_res_github_unity_title')}</h3>
                            <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{t('terrapolis_res_github_unity_desc')}</p>
                            <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.95rem', marginTop: '2rem', textAlign: 'right' }}>
                                {t('terrapolis_res_github_link')} →
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </section>
    );
}

export default Terrapolis;