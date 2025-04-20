import Link from 'next/link';
import ClientContext from '../components/ClientContext';

export default function Home() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">
          <h1 className="logo">
            karaokeGoGo
            <span className="beta-tag">beta</span>
          </h1>
        </div>
        <p className="tagline">Pour your soul. Remix your world.</p>
      </header>
       
      <main className="main-content">
        <div className="main-content-spacer"></div>
      </main>
       
      <nav className="main-navigation">
        <div className="nav-buttons">
          <Link href="/karaoke" className="nav-button karaoke-btn" style={{ border: '2px solid #ff99ff' }}>
            <div className="glow"></div>
            <div className="btn-icon"><i className="fas fa-microphone"></i></div>
            <div className="btn-text">Karaoke</div>
          </Link>
           
          <Link href="/my-mix" className="nav-button my-mix-btn" style={{ border: '2px solid #99ccff' }}>
            <div className="glow"></div>
            <div className="btn-icon"><i className="fas fa-music"></i></div>
            <div className="btn-text">My Mix</div>
          </Link>
           
          <Link href="/top-charts" className="nav-button top-charts-btn" style={{ border: '2px solid #ffcc99' }}>
            <div className="glow"></div>
            <div className="btn-icon"><i className="fas fa-chart-line"></i></div>
            <div className="btn-text">Top Charts</div>
          </Link>
           
          <Link href="/feed" className="nav-button feed-btn" style={{ border: '2px solid #99ff99' }}>
            <div className="glow"></div>
            <div className="btn-icon"><i className="fas fa-rss"></i></div>
            <div className="btn-text">Feed</div>
          </Link>
        </div>
      </nav>
      <ClientContext />
    </div>
  );
}