import React from 'react';
import { useLanguage } from '../LanguageContext';

function Experience() {
    // Je récupère la fonction de traduction pour l'ensemble des textes de la page.
    const { t } = useLanguage();

    return (
        <section className="detail-container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '3rem' }}>

            <div className="profile-header">
                <h1 style={{ margin: 0 }}>{t('exp_title')}</h1>
            </div>

            <div>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('exp_edu_title')}</h2>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '1rem' }}>{t('exp_edu_subtitle')}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.4' }}>{t('exp_bac_title')}</h3>
                        <span style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>{t('exp_bac_date')}</span>
                        <p style={{ color: 'var(--text-main)', margin: 0, lineHeight: '1.7', fontSize: '1rem' }}>{t('exp_bac_desc')}</p>
                    </div>

                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.4' }}>{t('exp_bts_title')}</h3>
                        <span style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>{t('exp_bts_date')}</span>
                        <p style={{ color: 'var(--text-main)', margin: 0, lineHeight: '1.7', fontSize: '1rem' }}>{t('exp_bts_desc')}</p>
                    </div>

                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.4' }}>{t('exp_ensim_title')}</h3>
                        <span style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>{t('exp_ensim_date')}</span>
                        <p style={{ color: 'var(--text-main)', margin: 0, lineHeight: '1.7', fontSize: '1rem' }}>{t('exp_ensim_desc')}</p>
                    </div>

                </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '0' }} />

            <div>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{t('exp_pro_title')}</h2>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '1rem' }}>{t('exp_pro_subtitle')}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.4' }}>{t('exp_elivia_title')}</h3>
                        <span style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>{t('exp_elivia_date')}</span>
                        <p style={{ color: 'var(--text-main)', margin: '0 0 1.5rem 0', fontWeight: '600', fontSize: '0.95rem' }}>{t('exp_elivia_challenge')}</p>
                        <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.7', fontSize: '0.95rem' }}>{t('exp_elivia_skills')}</p>
                    </div>

                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.4' }}>{t('exp_mcdo_title')}</h3>
                        <span style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>{t('exp_mcdo_date')}</span>
                        <p style={{ color: 'var(--text-main)', margin: '0 0 1.5rem 0', fontWeight: '600', fontSize: '0.95rem' }}>{t('exp_mcdo_challenge')}</p>
                        <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.7', fontSize: '0.95rem' }}>{t('exp_mcdo_skills')}</p>
                    </div>

                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.4' }}>{t('exp_argedis_title')}</h3>
                        <span style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>{t('exp_argedis_date')}</span>
                        <p style={{ color: 'var(--text-main)', margin: '0 0 1.5rem 0', fontWeight: '600', fontSize: '0.95rem' }}>{t('exp_argedis_challenge')}</p>
                        <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.7', fontSize: '0.95rem' }}>{t('exp_argedis_skills')}</p>
                    </div>

                    <div className="synopsis-box" style={{ backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', padding: '2rem', border: '1px solid var(--primary-color)' }}>
                        <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.4' }}>{t('exp_ensm_title')}</h3>
                        <span style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>{t('exp_ensm_date')}</span>
                        <p style={{ color: 'var(--text-main)', margin: '0 0 1.5rem 0', fontWeight: '600', fontSize: '0.95rem' }}>{t('exp_ensm_challenge')}</p>
                        <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.7', fontSize: '0.95rem' }}>{t('exp_ensm_skills')}</p>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Experience;