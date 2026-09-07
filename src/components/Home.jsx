import React from 'react';
import { useLanguage } from '../LanguageContext';

function Home() {
  const { t } = useLanguage();

  return (
    <section className="home-container">
      <div className="profile-header">
        <h1>{t('home_title')}</h1>
        <h2>{t('home_subtitle')}</h2>
      </div>
      
      <div className="profile-description">
        <p>{t('home_intro')}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>{t('home_section1_title')}</h3>
          <p style={{ margin: 0, fontSize: '0.95Krem', color: 'var(--text-muted)' }}>{t('home_section1_desc')}</p>
        </div>
        
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>{t('home_section2_title')}</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>{t('home_section2_desc')}</p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>{t('home_section3_title')}</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>{t('home_section3_desc')}</p>
        </div>
      </div>
    </section>
  );
}

export default Home;