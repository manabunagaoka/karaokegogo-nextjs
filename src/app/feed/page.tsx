'use client';

import PanelLayout from '@/components/layout/PanelLayout';

export default function FeedPage() {
  return (
    <PanelLayout 
      title="Community Feed" 
      titleColor="linear-gradient(to right, #99ff99, #66cc66)"
      borderColor="#99ff99"
    >
      <div className="section-title" style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <i className="fas fa-rss" style={{
          fontSize: '24px',
          marginRight: '12px',
          color: '#66ff66'
        }}></i>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 600,
          background: 'linear-gradient(to right, #99ff99, #66cc66)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          margin: 0
        }}>Feed</h2>
      </div>
      
      <p style={{
        fontSize: '16px',
        lineHeight: 1.6,
        maxWidth: '800px',
        marginBottom: '30px',
        color: 'rgba(255, 255, 255, 0.9)'
      }}>
        Discover what other users are recording and sharing in the KaraokeGoGo community.
      </p>
      
      <div style={{
        background: 'rgba(153, 255, 153, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        borderLeft: '4px solid #99ff99'
      }}>
        <h2 style={{
          fontSize: '24px',
          background: 'linear-gradient(to right, #99ff99, #66cc66)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: '15px'
        }}>
          Coming Soon!
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          The Feed feature is under development. In the future, you'll be able to:
        </p>
        <ul style={{
          marginTop: '15px',
          marginLeft: '20px',
          lineHeight: '1.6',
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          <li>See recent recordings from other users</li>
          <li>Like and comment on performances</li>
          <li>Follow your favorite singers</li>
          <li>Receive notifications about new content</li>
        </ul>
      </div>
    </PanelLayout>
  );
}