import React from 'react';
import { useLanguage } from '../LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <section className="detail-container">
      <div className="profile-header" style={{ marginBottom: '2rem' }}>
        <h1>{t('about_title')}</h1>
      </div>

      <div className="synopsis-box" style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.2rem' }}>{t('about_intro_title')}</h3>
        <p style={{ lineHeight: '1.7', color: 'var(--text-main)', margin: 0, fontSize: '0.95rem' }}>
          {t('about_intro_text')}
        </p>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>{t('about_passions_title')}</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{t('about_passions_subtitle')}</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div className="synopsis-box">
            <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.1rem' }}>{t('about_motorsport_title')}</h3>
            <p style={{ lineHeight: '1.6', color: 'var(--text-main)', margin: 0, fontSize: '0.9rem' }}>
              {t('about_motorsport_text')}
            </p>
          </div>
          
          <div className="synopsis-box">
            <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.1rem' }}>{t('about_manga_title')}</h3>
            <p style={{ lineHeight: '1.6', color: 'var(--text-main)', margin: 0, fontSize: '0.9rem' }}>
              {t('about_manga_text')}
            </p>
          </div>
          
          <div className="synopsis-box">
            <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.1rem' }}>{t('about_sport_title')}</h3>
            <p style={{ lineHeight: '1.6', color: 'var(--text-main)', margin: 0, fontSize: '0.9rem' }}>
              {t('about_sport_text')}
            </p>
          </div>
        </div>
      </div>

      <div className="synopsis-box">
        <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.2rem' }}>{t('about_mindset_title')}</h3>
        <p style={{ lineHeight: '1.7', color: 'var(--text-main)', margin: 0, fontSize: '0.95rem' }}>
          {t('about_mindset_text')}
        </p>
      </div>
    </section>
  );
}

export default About;