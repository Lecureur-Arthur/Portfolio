import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

function Home() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="detail-container">
      
      <div className="profile-header" style={{ marginBottom: '2.5rem' }}>
        <h1>{t('home_title')}</h1>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '400', margin: '0.5rem 0 0 0' }}>
          {t('home_subtitle')}
        </h2>
      </div>

      <div className="synopsis-box" style={{ marginBottom: '3rem', backgroundColor: 'rgba(160, 116, 255, 0.03)', borderColor: 'rgba(160, 116, 255, 0.2)' }}>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 0, fontSize: '1.25rem' }}>
          {t('home_welcome_title')}
        </h3>
        <p style={{ lineHeight: '1.7', color: 'var(--text-main)', margin: 0, fontSize: '1rem' }}>
          {t('home_welcome_text')}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
        <div 
          className="drama-card" 
          onClick={() => navigate('/a-propos')}
          style={{ padding: '1.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('home_section1_title')}</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{t('home_section1_desc')}</p>
          <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', marginTop: '1.5rem', textAlign: 'right' }}>
            {t('home_section1_action')} →
          </div>
        </div>
        
        <div 
          className="drama-card" 
          onClick={() => navigate('/projets')}
          style={{ padding: '1.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('home_section2_title')}</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{t('home_section2_desc')}</p>
          <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', marginTop: '1.5rem', textAlign: 'right' }}>
            {t('home_section2_action')} →
          </div>
        </div>

        <div 
          className="drama-card" 
          onClick={() => navigate('/experience')}
          style={{ padding: '1.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.2rem', marginBottom: '1rem' }}>{t('home_section3_title')}</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{t('home_section3_desc')}</p>
          <div style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', marginTop: '1.5rem', textAlign: 'right' }}>
            {t('home_section3_action')} →
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}>{t('home_expertise_title')}</h2>
        <div className="stat-grid-2x2">
          <div className="stat-box" style={{ padding: '1.5rem' }}>
            <div className="stat-box-title" style={{ fontSize: '1rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              {t('home_expertise_1_title')}
            </div>
            <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              {t('home_expertise_1_desc')}
            </p>
          </div>
          
          <div className="stat-box" style={{ padding: '1.5rem' }}>
            <div className="stat-box-title" style={{ fontSize: '1rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              {t('home_expertise_2_title')}
            </div>
            <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              {t('home_expertise_2_desc')}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Home;