'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FeedPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  
  const filters = ['All', 'News', 'Stories', 'Artists', 'Events', 'Challenges'];
  
  // Ensure the panel appears only after component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push('/');
    }, 300); // Wait for transition before navigating
  };
  
  return (
    <div className={`content-panel ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Panel handle for swipe down */}
      <div className="panel-handle" onClick={handleClose}>
        <div className="handle-indicator"></div>
      </div>
      
      {/* Panel header */}
      <div className="panel-header">
        <h2 className="panel-title">Read updates and discover</h2>
        <button className="close-button" onClick={handleClose}>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      
      {/* Panel content */}
      <div className="panel-content">
        <div className="section-title">
          <i className="fas fa-rss"></i>
          <h2>Feed</h2>
        </div>
        
        <p className="section-description">
          Read news and stories from around the world. Learn about creators and their songs.
        </p>
        
        {/* Feed filters */}
        <div className="feed-filters">
          {filters.map(filter => (
            <div 
              key={filter}
              className={`feed-filter ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>
        
        {/* Feed posts */}
        <div className="feed-posts">
          {/* Post 1 */}
          <div className="feed-post">
            <div className="post-header">
              <div className="post-avatar">KG</div>
              <div className="post-user">
                <div className="post-username">KaraokeGoGo Team</div>
                <div className="post-meta">
                  <span className="post-time"><i className="fas fa-clock"></i> 2 hours ago</span>
                  <span className="post-category"><i className="fas fa-tag"></i> News</span>
                </div>
              </div>
            </div>
            <div className="post-content">
              <div className="post-text">
                We created KaraokeGoGo with a simple yet powerful vision: to harness the joy of karaoke as a creative tool for self-expression and learning.
                <br /><br />
                Music has this incredible ability to connect people across boundaries. By giving everyone the chance to create their own lyrics, remix tracks, and share their musical journey, we're building more than just an app — we're nurturing a community where creativity and education flow together naturally.
                <br /><br />
                When you sing someone else's words, you embody their emotions. When you write your own, you discover your voice. That's where true learning happens.
              </div>
            </div>
            <div className="post-actions">
              <div className="post-action">
                <i className="fas fa-heart"></i>
                <span>243</span>
              </div>
              <div className="post-action">
                <i className="fas fa-comment"></i>
                <span>56</span>
              </div>
              <div className="post-action">
                <i className="fas fa-share"></i>
                <span>Share</span>
              </div>
            </div>
          </div>
          
          {/* Post 2 */}
          <div className="feed-post">
            <div className="post-header">
              <div className="post-avatar">M</div>
              <div className="post-user">
                <div className="post-username">Manabu, CEO</div>
                <div className="post-meta">
                  <span className="post-time"><i className="fas fa-clock"></i> 1 day ago</span>
                  <span className="post-category"><i className="fas fa-tag"></i> Stories</span>
                </div>
              </div>
            </div>
            <div className="post-content">
              <div className="post-text">
                <strong>My Journey from Japan to the Global Stage</strong>
                <br /><br />
                Growing up in Japan, the land of sun, Nintendo, and karaoke, I had a confession to make — I loved the sun and Nintendo, but I actually hated karaoke! This might sound strange coming from the CEO of KaraokeGoGo, but my mom ran a karaoke bar in a small town by the Japan Sea, and I saw it all.
                <br /><br />
                Her customers were mostly teachers from local schools, looking to blow off steam after long days. Watching them made me wonder: why is teaching so challenging, and why don't we students enjoy learning more?
                <br /><br />
                Years later at Harvard, I discovered education could actually be exhilarating. As AI tools emerged making creation more accessible, I reflected on my time producing media at Sesame Workshop. That's when it clicked — karaoke could be the perfect bridge between learning and fun.
              </div>
              <div className="post-image">
                <img src="/images/youaremeanttobehere.jpg" alt="Message on Harvard bridge" />
              </div>
              <div className="image-caption">
                On my way home from the first day at Harvard, I found this text on the bridge. "You're meant to be here" — a reminder that anything is possible.
              </div>
              <div className="post-text">
                I'll be sharing insights here regularly, including my own songs! I hope you'll join me in creating, or simply drop by to discover what others are making. This is about finding joy in expression and learning together.
              </div>
            </div>
            <div className="post-actions">
              <div className="post-action">
                <i className="fas fa-heart"></i>
                <span>325</span>
              </div>
              <div className="post-action">
                <i className="fas fa-comment"></i>
                <span>98</span>
              </div>
              <div className="post-action">
                <i className="fas fa-share"></i>
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Coming Soon Notice */}
        <div className="coming-soon-notice">
          <h3>Coming Soon</h3>
          <p>
            Feed section will be interactive and you can like, leave comments, and share your thoughts with the community.
          </p>
        </div>
      </div>
    </div>
  );
}