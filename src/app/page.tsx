import Link from 'next/link';

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
          <Link href="/karaoke" className="nav-button karaoke-btn">
            <div className="glow"></div>
            <div className="btn-icon"><i className="fas fa-microphone"></i></div>
            <div className="btn-text">Karaoke</div>
          </Link>
           
          <Link href="/my-mix" className="nav-button my-mix-btn">
            <div className="glow"></div>
            <div className="btn-icon"><i className="fas fa-music"></i></div>
            <div className="btn-text">My Mix</div>
          </Link>
           
          <Link href="/top-charts" className="nav-button top-charts-btn">
            <div className="glow"></div>
            <div className="btn-icon"><i className="fas fa-chart-line"></i></div>
            <div className="btn-text">Top Charts</div>
          </Link>
           
          <Link href="/feed" className="nav-button feed-btn">
            <div className="glow"></div>
            <div className="btn-icon"><i className="fas fa-rss"></i></div>
            <div className="btn-text">Feed</div>
          </Link>
        </div>
      </nav>
    </div>
  );
}