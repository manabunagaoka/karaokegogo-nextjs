'use client';

import PanelLayout from '@/components/layout/PanelLayout';

export default function TopChartsPage() {
  return (
    <PanelLayout 
      title="Top Performances" 
      titleColor="linear-gradient(to right, #ffcc66, #ff9933)"
      borderColor="#ffcc66"
    >
      <div className="section-title" style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <i className="fas fa-chart-line" style={{
          fontSize: '24px',
          marginRight: '12px',
          color: '#ffcc66'
        }}></i>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 600,
          background: 'linear-gradient(to right, #ffcc66, #ff9933)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          margin: 0
        }}>Top Charts</h2>
      </div>
      
      <p style={{
        fontSize: '16px',
        lineHeight: 1.6,
        maxWidth: '800px',
        marginBottom: '30px',
        color: 'rgba(255, 255, 255, 0.9)'
      }}>
        Discover the most popular performances and trending tracks in the KaraokeGoGo community.
      </p>
      
      <div style={{
        background: 'rgba(255, 204, 102, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        borderLeft: '4px solid #ffcc66'
      }}>
        <h2 style={{
          fontSize: '24px',
          background: 'linear-gradient(to right, #ffcc66, #ff9933)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: '15px'
        }}>
          Coming Soon: Top Charts
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          Once more users start sharing their performances, you'll see the top-rated recordings here!
        </p>
      </div>
      
      <div style={{marginTop: '30px'}}>
        <h3 style={{
          color: '#ffcc66',
          fontSize: '22px',
          marginBottom: '15px',
          background: 'linear-gradient(to right, #ffcc66, #ff9933)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Ranking Categories
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '15px',
          marginTop: '20px'
        }}>
          {['Most Liked', 'Most Played', 'Trending', 'Weekly Hits'].map((category, index) => (
            <div key={index} style={{
              background: 'rgba(255, 204, 102, 0.15)',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid rgba(255, 204, 102, 0.3)'
            }}>
              <span style={{
                fontSize: '18px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #ffcc66, #ff9933)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PanelLayout>
  );
}