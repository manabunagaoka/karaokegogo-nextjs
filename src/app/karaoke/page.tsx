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
      <div className="karaoke-section">
        <div className="section-header">
          <i className="fas fa-microphone section-icon"></i>
          <h2 className="section-title">Karaoke</h2>
        </div>
        
        <p className="section-description">
          Sing along to your favorite tracks with our immersive karaoke experience. 
          Keep checking back for more tracks. Check our Feed on the latest news and stories.
        </p>
        
        <div className="featured-tracks">
          <h3 className="featured-title">Featured Tracks</h3>
          
          <div className="track-item">
            <div className="track-info">
              <div className="track-name">Teacher Anthem</div>
              <div className="track-type vocal">With Vocal</div>
            </div>
            
            <div className="player-container">
              <div className="player-controls">
                <div 
                  className="play-button"
                  onClick={toggleVocal}
                >
                  <i className={`fas ${playingVocal ? 'fa-pause' : 'fa-play'}`}></i>
                </div>
                
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: playingVocal ? '30%' : '0%' }}
                  ></div>
                </div>
                
                <div className="time-display">
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
          
          <div className="track-item">
            <div className="track-info">
              <div className="track-name">Teacher Anthem</div>
              <div className="track-type karaoke">Karaoke Ver.</div>
            </div>
            
            <div className="player-container">
              <div className="player-controls">
                <div 
                  className="play-button"
                  onClick={toggleKaraoke}
                >
                  <i className={`fas ${playingKaraoke ? 'fa-pause' : 'fa-play'}`}></i>
                </div>
                
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: playingKaraoke ? '30%' : '0%' }}
                  ></div>
                </div>
                
                <div className="time-display">
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
          
          <div className="coming-soon-feature">
            <div className="feature-icon">
              <i className="fas fa-microphone-alt"></i>
            </div>
            
            <div className="feature-content">
              <h4 className="feature-title">
                Recording Function
              </h4>
              <p className="feature-description">
                Coming soon! Record your performance and share it with friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PanelLayout>
  );
}