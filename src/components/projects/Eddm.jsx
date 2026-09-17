import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

// J'importe les captures d'écran de l'environnement, des énigmes et du menu de mon jeu.
import imgIcon from '../../assets/PROJECTS/EDDM/Icon.png';
import imgEnv from '../../assets/PROJECTS/EDDM/Environnement.png';
import imgEnigma from '../../assets/PROJECTS/EDDM/Enigme.png';
import imgMenu from '../../assets/PROJECTS/EDDM/GameMenu.png';

function Eddm() {
    const { t } = useLanguage();
    const navigate = useNavigate();

    // Je définis les styles pour garantir une mise en page claire et responsive.
    const bannerFigureStyle = {
        margin: '0 auto 2rem auto',
        maxWidth: '850px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const posterFigureStyle = {
        margin: '0 auto 2rem auto',
        maxWidth: '450px',
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
                    <h1 style={{ margin: 0 }}>{t('eddm_page_title')}</h1>
                    <h2 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '400', margin: '0.5rem 0 2rem 0' }}>
                        {t('eddm_page_subtitle')}
                    </h2>
                </div>
                <figure style={posterFigureStyle}>
                    <img src={imgIcon} alt="Icône du jeu L'Évasion du Donjon Maudit" style={baseImageStyle} />
                    <figcaption style={captionStyle}>{t('eddm_caption_icon')}</figcaption>
                </figure>
            </div>

            <div className="synopsis-box" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.3rem', marginBottom: '1rem' }}>{t('eddm_concept_title')}</h3>
                <p style={{ lineHeight: '1.8', color: 'var(--text-main)', margin: 0, fontSize: '1.05rem' }}>{t('eddm_concept_desc')}</p>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('eddm_features_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem' }}>{t('eddm_features_desc')}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <img src={imgEnv} alt="Environnement et Level Design" style={gridImageStyle} />
                        <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--border-color)', flex: 1 }}>
                            <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('eddm_env_title')}</h3>
                            <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>{t('eddm_env_desc')}</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <img src={imgEnigma} alt="Énigme du digicode" style={gridImageStyle} />
                        <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--border-color)', flex: 1 }}>
                            <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('eddm_enigma_title')}</h3>
                            <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>{t('eddm_enigma_desc')}</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <img src={imgMenu} alt="Menu principal du jeu" style={gridImageStyle} />
                        <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--border-color)', flex: 1 }}>
                            <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('eddm_ui_title')}</h3>
                            <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>{t('eddm_ui_desc')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('eddm_video_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem' }}>{t('eddm_video_desc')}</p>
                <div style={videoContainerStyle}>
                    <iframe 
                        style={iframeStyle}
                        src="https://www.youtube.com/embed/TON_ID_VIDEO_ICI" 
                        title="Démonstration Évasion du Donjon Maudit" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('eddm_res_title')}</h2>
                <a href="https://github.com/Lecureur-Arthur/EvasionDudonjonMaudit_Solo" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div className="drama-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', transition: 'transform 0.2s, border-color 0.2s' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.4rem', marginBottom: '1rem' }}>{t('eddm_res_github_title')}</h3>
                        <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{t('eddm_res_github_desc')}</p>
                        <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.95rem', marginTop: '2rem', textAlign: 'right' }}>
                            {t('eddm_res_github_link')} →
                        </div>
                    </div>
                </a>
            </div>

        </section>
    );
}

export default Eddm;