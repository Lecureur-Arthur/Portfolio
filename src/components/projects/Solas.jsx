import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

import imgAllPlanetes from '../../assets/PROJECTS/SOLAS/AllPlanetes.png';
import imgPlanet from '../../assets/PROJECTS/SOLAS/Planet.png';
import imgCeintureAsteroid from '../../assets/PROJECTS/SOLAS/CeintureAsteroid.png';
import imgVaisseauDevant from '../../assets/PROJECTS/SOLAS/Vaisseau_devant_V1.png';
import imgVaisseauCote from '../../assets/PROJECTS/SOLAS/Vaisseau_cote_V1.png';
import imgModExt from '../../assets/PROJECTS/SOLAS/ModelFenetreV2_2.png';
import imgModInt from '../../assets/PROJECTS/SOLAS/ModelFenetreV2_1.png';
import imgModPorte from '../../assets/PROJECTS/SOLAS/ModelPourPorte.png';
import imgModV1 from '../../assets/PROJECTS/SOLAS/ModelFentreV1.png';
import imgPoster from '../../assets/PROJECTS/SOLAS/Poster.png';

function Solas() {
    const { t } = useLanguage();
    const navigate = useNavigate();

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
                    <h1 style={{ margin: 0 }}>{t('solas_page_title')}</h1>
                    <h2 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '400', margin: '0.5rem 0 2rem 0' }}>
                        {t('solas_page_subtitle')}
                    </h2>
                </div>
                <figure style={bannerFigureStyle}>
                    <img src={imgAllPlanetes} alt="Toutes les planètes du projet Solas" style={baseImageStyle} />
                    <figcaption style={captionStyle}>{t('solas_caption_allplanetes')}</figcaption>
                </figure>
            </div>

            <div className="synopsis-box" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.3rem', marginBottom: '1rem' }}>{t('solas_scenario_title')}</h3>
                <p style={{ lineHeight: '1.8', color: 'var(--text-main)', margin: '0 0 1rem 0', fontSize: '1.05rem' }}>{t('solas_scenario_p1')}</p>
                <p style={{ lineHeight: '1.8', color: 'var(--text-main)', margin: 0, fontSize: '1.05rem' }}>{t('solas_scenario_p2')}</p>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('solas_mission_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem' }}>{t('solas_mission_desc')}</p>
                
                <figure style={bannerFigureStyle}>
                    <img src={imgPlanet} alt="Planètes du jeu" style={baseImageStyle} />
                    <figcaption style={captionStyle}>{t('solas_caption_planet')}</figcaption>
                </figure>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('solas_mission_mars_title')}</h3>
                        <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>{t('solas_mission_mars_desc')}</p>
                    </div>
                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('solas_mission_lune_title')}</h3>
                        <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>{t('solas_mission_lune_desc')}</p>
                    </div>
                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('solas_mission_geantes_title')}</h3>
                        <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>{t('solas_mission_geantes_desc')}</p>
                    </div>
                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--primary-color)' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('solas_mission_neptune_title')}</h3>
                        <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>{t('solas_mission_neptune_desc')}</p>
                    </div>
                </div>

                <figure style={bannerFigureStyle}>
                    <img src={imgCeintureAsteroid} alt="Ceinture d'Astéroïdes" style={baseImageStyle} />
                    <figcaption style={captionStyle}>{t('solas_caption_asteroid')}</figcaption>
                </figure>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('solas_dev_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem' }}>{t('solas_dev_desc')}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.2rem', marginBottom: '1.5rem' }}>{t('solas_role_title')}</h3>
                        
                        <p style={{ color: '#fff', fontWeight: 'bold', margin: '0 0 0.2rem 0' }}>{t('solas_role_1_title')}</p>
                        <p style={{ margin: '0 0 1rem 0', color: 'var(--text-main)', fontSize: '0.95rem' }}>{t('solas_role_1_desc')}</p>

                        <p style={{ color: '#fff', fontWeight: 'bold', margin: '0 0 0.2rem 0' }}>{t('solas_role_2_title')}</p>
                        <p style={{ margin: '0 0 1rem 0', color: 'var(--text-main)', fontSize: '0.95rem' }}>{t('solas_role_2_desc')}</p>

                        <p style={{ color: '#fff', fontWeight: 'bold', margin: '0 0 0.2rem 0' }}>{t('solas_role_3_title')}</p>
                        <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.95rem' }}>{t('solas_role_3_desc')}</p>
                    </div>

                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.2rem', marginBottom: '1.5rem' }}>{t('solas_stack_title')}</h3>
                        
                        <p style={{ color: '#fff', fontWeight: 'bold', margin: '0 0 0.2rem 0' }}>{t('solas_stack_1_title')}</p>
                        <p style={{ margin: '0 0 1rem 0', color: 'var(--text-main)', fontSize: '0.95rem' }}>{t('solas_stack_1_desc')}</p>

                        <p style={{ color: '#fff', fontWeight: 'bold', margin: '0 0 0.2rem 0' }}>{t('solas_stack_2_title')}</p>
                        <p style={{ margin: '0 0 1rem 0', color: 'var(--text-main)', fontSize: '0.95rem' }}>{t('solas_stack_2_desc')}</p>

                        <p style={{ color: '#fff', fontWeight: 'bold', margin: '0 0 0.2rem 0' }}>{t('solas_stack_3_title')}</p>
                        <p style={{ margin: '0 0 1rem 0', color: 'var(--text-main)', fontSize: '0.95rem' }}>{t('solas_stack_3_desc')}</p>

                        <p style={{ color: '#fff', fontWeight: 'bold', margin: '0 0 0.2rem 0' }}>{t('solas_stack_4_title')}</p>
                        <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.95rem' }}>{t('solas_stack_4_desc')}</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('solas_arch_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem' }}>{t('solas_arch_desc')}</p>

                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem' }}>{t('solas_arch_struct_title')}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <img src={imgVaisseauDevant} alt="Vue latérale du vaisseau" style={gridImageStyle} />
                        <figcaption style={captionStyle}>{t('solas_caption_vaisseau_devant')}</figcaption>
                    </figure>
                    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <img src={imgVaisseauCote} alt="Vue arrière du vaisseau" style={gridImageStyle} />
                        <figcaption style={captionStyle}>{t('solas_caption_vaisseau_cote')}</figcaption>
                    </figure>
                </div>

                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginTop: '3rem', marginBottom: '1rem' }}>{t('solas_arch_mod_title')}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <img src={imgModExt} alt="Module Extérieur" style={gridImageStyle} />
                        <figcaption style={captionStyle}>{t('solas_caption_mod_ext')}</figcaption>
                    </figure>
                    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <img src={imgModInt} alt="Module Intérieur" style={gridImageStyle} />
                        <figcaption style={captionStyle}>{t('solas_caption_mod_int')}</figcaption>
                    </figure>
                    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <img src={imgModPorte} alt="Module Porte" style={gridImageStyle} />
                        <figcaption style={captionStyle}>{t('solas_caption_mod_porte')}</figcaption>
                    </figure>
                    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <img src={imgModV1} alt="Module V1" style={gridImageStyle} />
                        <figcaption style={captionStyle}>{t('solas_caption_mod_v1')}</figcaption>
                    </figure>
                </div>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('solas_video_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem' }}>{t('solas_video_desc')}</p>
                <div style={videoContainerStyle}>
                    <iframe 
                        style={iframeStyle}
                        src="https://www.youtube.com/embed/Yr-r0P-kW_w" 
                        title="Démonstration SOLAS" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('solas_event_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem' }}>{t('solas_event_desc')}</p>
                <figure style={posterFigureStyle}>
                    <img src={imgPoster} alt="Affiche de présentation" style={baseImageStyle} />
                    <figcaption style={captionStyle}>{t('solas_caption_poster')}</figcaption>
                </figure>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('solas_res_title')}</h2>
                <a href="https://github.com/Lecureur-Arthur/SOLAS" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div className="drama-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', transition: 'transform 0.2s, border-color 0.2s' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.4rem', marginBottom: '1rem' }}>{t('solas_res_github_title')}</h3>
                        <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{t('solas_res_github_desc')}</p>
                        <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.95rem', marginTop: '2rem', textAlign: 'right' }}>
                            {t('solas_res_github_link')}
                        </div>
                    </div>
                </a>
            </div>

        </section>
    );
}

export default Solas;