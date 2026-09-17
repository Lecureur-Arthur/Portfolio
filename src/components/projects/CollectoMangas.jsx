import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

import imgHome from '../../assets/PROJECTS/CollectoManga/Home.png';
import imgConnexion from '../../assets/PROJECTS/CollectoManga/Connexion.png';
import imgListePossed from '../../assets/PROJECTS/CollectoManga/ListeMangaPossed.png';
import imgListeRead from '../../assets/PROJECTS/CollectoManga/ListeMangaRead.png';
import imgPresentation from '../../assets/PROJECTS/CollectoManga/PresentationManga.png';
import imgAddManga from '../../assets/PROJECTS/CollectoManga/AddManga.png';

function CollectoMangas() {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const mobileImageStyle = {
        width: '100%',
        maxWidth: '280px',
        margin: '0 auto',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        display: 'block'
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
                    <h1 style={{ margin: 0 }}>{t('collectomangas_page_title')}</h1>
                    <h2 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '400', margin: '0.5rem 0 2rem 0' }}>
                        {t('collectomangas_page_subtitle')}
                    </h2>
                </div>
            </div>

            <div className="synopsis-box" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.3rem', marginBottom: '1rem' }}>{t('collectomangas_context_title')}</h3>
                <p style={{ lineHeight: '1.8', color: 'var(--text-main)', margin: '0 0 1rem 0', fontSize: '1.05rem' }}>{t('collectomangas_context_desc_1')}</p>
                <p style={{ lineHeight: '1.8', color: 'var(--text-main)', margin: 0, fontSize: '1.05rem' }}>{t('collectomangas_context_desc_2')}</p>
            </div>

            <div>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('collectomangas_ui_title')}</h2>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0', fontSize: '1.05rem', lineHeight: '1.8' }}>{t('collectomangas_ui_desc')}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                        <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--border-color)', order: 1 }}>
                            <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('collectomangas_feat_auth_title')}</h3>
                            <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>{t('collectomangas_feat_auth_desc')}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', order: 2 }}>
                            <img src={imgHome} alt="Maquette de l'accueil" style={mobileImageStyle} />
                            <img src={imgConnexion} alt="Maquette de connexion" style={mobileImageStyle} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', order: 2 }}>
                            <img src={imgListePossed} alt="Liste des mangas possédés" style={mobileImageStyle} />
                            <img src={imgListeRead} alt="Liste des mangas lus" style={mobileImageStyle} />
                        </div>
                        <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--border-color)', order: 1 }}>
                            <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('collectomangas_feat_list_title')}</h3>
                            <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>{t('collectomangas_feat_list_desc')}</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                        <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', border: '1px solid var(--primary-color)', order: 1 }}>
                            <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('collectomangas_feat_detail_title')}</h3>
                            <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>{t('collectomangas_feat_detail_desc')}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', order: 2 }}>
                            <img src={imgPresentation} alt="Détails d'un manga" style={mobileImageStyle} />
                            <img src={imgAddManga} alt="Ajout d'un manga" style={mobileImageStyle} />
                        </div>
                    </div>

                </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('collectomangas_res_title')}</h2>
                <a href="https://github.com/Lecureur-Arthur/CollectoMangas" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div className="drama-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', transition: 'transform 0.2s, border-color 0.2s' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.4rem', marginBottom: '1rem' }}>{t('collectomangas_res_github_title')}</h3>
                        <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{t('collectomangas_res_github_desc')}</p>
                        <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.95rem', marginTop: '2rem', textAlign: 'right' }}>
                            {t('collectomangas_res_github_link')} →
                        </div>
                    </div>
                </a>
            </div>

        </section>
    );
}

export default CollectoMangas;