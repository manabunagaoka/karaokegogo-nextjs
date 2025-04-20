'use client';

import PanelLayout from '@/components/layout/PanelLayout';

export default function MyMixPage() {
  return (
    <PanelLayout 
      title="My Recordings" 
      titleColor="linear-gradient(to right, #66ccff, #3399ff)"
      borderColor="#66ccff"
    >
      <div className="section-title" style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <i className="fas fa-music" style={{
          fontSize: '24px',
          marginRight: '12px',
          color: '#66ccff'
        }}></i>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 600,
          background: 'linear-gradient(to right, #66ccff, #3399ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          margin: 0
        }}>My Mix</h2>
      </div>
      
      <p style={{
        fontSize: '16px',
        lineHeight: 1.6,
        maxWidth: '800px',
        marginBottom: '30px',
        color: 'rgba(255, 255, 255, 0.9)'
      }}>
        View and manage your recordings and saved tracks.
      </p>
      
      <div style={{
        background: 'rgba(102, 204, 255, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        borderLeft: '4px solid #66ccff'
      }}>
        <h2 style={{
          fontSize: '24px',
          background: 'linear-gradient(to right, #66ccff, #3399ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: '15px'
        }}>
          No Recordings Yet
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          You haven't made any recordings yet. Go to the Karaoke section to record your first performance!
        </p>
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        background: 'linear-gradient(135deg, rgba(102, 204, 255, 0.15), rgba(51, 153, 255, 0.15))',
        borderRadius: '15px',
        marginTop: '30px',
        borderLeft: '4px solid rgba(102, 204, 255, 0.7)'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #66ccff, #3399ff)',
          borderRadius: '50%',
          marginRight: '20px',
          boxShadow: '0 0 15px rgba(102, 204, 255, 0.5)'
        }}>
          <i className="fas fa-magic" style={{ fontSize: '28px', color: 'white' }}></i>
        </div>
        
        <div style={{ flex: 1 }}>
          <h4 style={{
            fontSize: '18px',
            margin: '0 0 8px 0',
            background: 'linear-gradient(to right, #66ccff, #3399ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Coming Soon: Audio Enhancement
          </h4>
          <p style={{
            fontSize: '14px',
            margin: 0,
            opacity: 0.9,
            color: 'white'
          }}>
            We're working on AI-powered vocal enhancement to make your recordings sound even better!
          </p>
        </div>
      </div>
    </PanelLayout>
  );
}