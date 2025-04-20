'use client';

import { useState } from 'react';
import PanelLayout from '@/components/layout/PanelLayout';

export default function KaraokePage() {
  const [playingVocal, setPlayingVocal] = useState(false);
  const [playingKaraoke, setPlayingKaraoke] = useState(false);
  
  const toggleVocal = () => {
    setPlayingVocal(!playingVocal);
    if (!playingVocal) {
      setPlayingKaraoke(false); // Stop karaoke version if starting vocal
    }
  };
  
  const toggleKaraoke = () => {
    setPlayingKaraoke(!playingKaraoke);
    if (!playingKaraoke) {
      setPlayingVocal(false); // Stop vocal version if starting karaoke
    }
  };
  
  return (
    <PanelLayout 
      title="Browse Karaoke Tracks"
      borderColor="rgba(255, 0, 204, 0.7)"
      titleColor="linear-gradient(to right, #ff9900, #ff00ff)"
    >
      <div className="section-title" style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <i className="fas fa-microphone" style={{
          fontSize: '24px',
          marginRight: '12px',
          color: '#ff00cc'
        }}></i>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 600,
          background: 'linear-gradient(to right, #ff9900, #ff00ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          margin: 0
        }}>Karaoke</h2>
      </div>
      
      <div className="karaoke-container">
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          marginBottom: '25px',
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          Sing along to your favorite tracks with our immersive karaoke experience. 
          Keep checking back for more tracks. Check our Feed on the latest news and stories.
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <h3 style={{
            fontSize: '20px',
            marginBottom: '15px',
            background: 'linear-gradient(to right, #ff00cc, #3333ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block'
          }}>Featured Tracks</h3>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px',
            marginBottom: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid rgba(255, 0, 204, 0.7)',
            transition: 'transform 0.3s ease, background 0.3s ease'
          }}>
            <div style={{
              flex: '0 0 25%',
              marginRight: '15px'
            }}>
              <div style={{
                fontWeight: 600,
                fontSize: '16px',
                marginBottom: '4px',
                color: 'white'
              }}>Teacher Anthem</div>
              <div style={{
                fontSize: '14px',
                padding: '4px 8px',
                borderRadius: '12px',
                display: 'inline-block',
                fontWeight: 500,
                background: 'linear-gradient(135deg, rgba(255, 0, 204, 0.2), rgba(51, 51, 255, 0.2))',
                color: '#ff66cc',
                border: '1px solid rgba(255, 0, 204, 0.3)'
              }}>With Vocal</div>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '18px',
                padding: '5px 15px'
              }}>
                <div 
                  onClick={toggleVocal}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff00cc, #3333ff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px rgba(255, 0, 204, 0.4)',
                    marginRight: '10px',
                    flexShrink: 0
                  }}
                >
                  <i className="fas fa-play" style={{ color: 'white', fontSize: '14px' }}></i>
                </div>
                
                <div style={{
                  flex: 1,
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '3px',
                  position: 'relative',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(to right, #ff00cc, #3333ff)',
                    borderRadius: '3px',
                    width: playingVocal ? '30%' : '0%'
                  }}></div>
                </div>
                
                <div style={{
                  marginLeft: '15px',
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'monospace'
                }}>
                  {playingVocal ? '0:45' : '0:00'}
                </div>
              </div>
              
              {playingVocal && (
                <audio
                  src="/music/tracks/Teacher Anthem Vocal.wav"
                  autoPlay
                  onEnded={() => setPlayingVocal(false)}
                />
              )}
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px',
            marginBottom: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid rgba(255, 0, 204, 0.7)',
            transition: 'transform 0.3s ease, background 0.3s ease'
          }}>
            <div style={{
              flex: '0 0 25%',
              marginRight: '15px'
            }}>
              <div style={{
                fontWeight: 600,
                fontSize: '16px',
                marginBottom: '4px',
                color: 'white'
              }}>Teacher Anthem</div>
              <div style={{
                fontSize: '14px',
                padding: '4px 8px',
                borderRadius: '12px',
                display: 'inline-block',
                fontWeight: 500,
                background: 'linear-gradient(135deg, rgba(255, 204, 0, 0.2), rgba(255, 102, 0, 0.2))',
                color: '#ffcc66',
                border: '1px solid rgba(255, 204, 0, 0.3)'
              }}>Karaoke Ver.</div>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '18px',
                padding: '5px 15px'
              }}>
                <div 
                  onClick={toggleKaraoke}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff00cc, #3333ff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px rgba(255, 0, 204, 0.4)',
                    marginRight: '10px',
                    flexShrink: 0
                  }}
                >
                  <i className="fas fa-play" style={{ color: 'white', fontSize: '14px' }}></i>
                </div>
                
                <div style={{
                  flex: 1,
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '3px',
                  position: 'relative',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(to right, #ff00cc, #3333ff)',
                    borderRadius: '3px',
                    width: playingKaraoke ? '30%' : '0%'
                  }}></div>
                </div>
                
                <div style={{
                  marginLeft: '15px',
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'monospace'
                }}>
                  {playingKaraoke ? '0:45' : '0:00'}
                </div>
              </div>
              
              {playingKaraoke && (
                <audio
                  src="/music/tracks/Teacher Anthem Karaoke.wav"
                  autoPlay
                  onEnded={() => setPlayingKaraoke(false)}
                />
              )}
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            margin: '25px 0',
            background: 'linear-gradient(135deg, rgba(255, 0, 204, 0.15), rgba(51, 51, 255, 0.15))',
            borderRadius: '15px',
            borderLeft: '4px solid rgba(255, 0, 204, 0.7)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #ff00cc, #3333ff)',
              borderRadius: '50%',
              marginRight: '20px',
              boxShadow: '0 0 15px rgba(255, 0, 204, 0.5)'
            }}>
              <i className="fas fa-microphone-alt" style={{ fontSize: '28px', color: 'white' }}></i>
            </div>
            
            <div style={{ flex: 1 }}>
              <h4 style={{
                fontSize: '18px',
                margin: '0 0 8px 0',
                background: 'linear-gradient(to right, #ff00cc, #ff66ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                Recording Function
              </h4>
              <p style={{
                fontSize: '14px',
                margin: 0,
                opacity: 0.9,
                color: 'white'
              }}>
                Coming soon! Record your performance and share it with friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PanelLayout>
  );
}