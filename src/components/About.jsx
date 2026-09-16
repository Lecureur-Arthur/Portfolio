import React from 'react';
import { useLanguage } from '../LanguageContext';

function About() {
    const { t } = useLanguage();

    return (
        <section className="detail-container" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', height: '100%' }}>

            <div className="profile-header">
                <h1 style={{ margin: 0 }}>{t('about_title')}</h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                <div className="synopsis-box" style={{ display: 'flex', flexDirection: 'column', padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
                    <h3 style={{ color: 'var(--primary-color)', marginTop: 0, marginBottom: '1.2rem', fontSize: '1.3rem' }}>
                        {t('about_intro_title')}
                    </h3>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-main)', margin: 0, fontSize: '1.05rem', flex: 1 }}>
                        {t('about_intro_text')}
                    </p>
                </div>

                <div className="synopsis-box" style={{ display: 'flex', flexDirection: 'column', padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
                    <h3 style={{ color: 'var(--primary-color)', marginTop: 0, marginBottom: '1.2rem', fontSize: '1.3rem' }}>
                        {t('about_skills_title')}
                    </h3>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-main)', margin: 0, fontSize: '1.05rem', flex: 1 }}>
                        {t('about_skills_text')}
                    </p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="synopsis-box" style={{ display: 'flex', flexDirection: 'column', padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
                    <h3 style={{ color: 'var(--primary-color)', marginTop: 0, marginBottom: '1.2rem', fontSize: '1.2rem' }}>
                        {t('about_motorsport_title')}
                    </h3>
                    <p style={{ lineHeight: '1.7', color: 'var(--text-main)', margin: 0, fontSize: '1rem', flex: 1 }}>
                        {t('about_motorsport_text')}
                    </p>
                </div>

                <div className="synopsis-box" style={{ display: 'flex', flexDirection: 'column', padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
                    <h3 style={{ color: 'var(--primary-color)', marginTop: 0, marginBottom: '1.2rem', fontSize: '1.2rem' }}>
                        {t('about_manga_title')}
                    </h3>
                    <p style={{ lineHeight: '1.7', color: 'var(--text-main)', margin: 0, fontSize: '1rem', flex: 1 }}>
                        {t('about_manga_text')}
                    </p>
                </div>

                <div className="synopsis-box" style={{ display: 'flex', flexDirection: 'column', padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
                    <h3 style={{ color: 'var(--primary-color)', marginTop: 0, marginBottom: '1.2rem', fontSize: '1.2rem' }}>
                        {t('about_sport_title')}
                    </h3>
                    <p style={{ lineHeight: '1.7', color: 'var(--text-main)', margin: 0, fontSize: '1rem', flex: 1 }}>
                        {t('about_sport_text')}
                    </p>
                </div>
            </div>

        </section>
    );
}

export default About;