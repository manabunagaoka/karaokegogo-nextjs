// components/PanelLayout.js
import Link from 'next/link';

export default function PanelLayout({ children, title }) {
  return (
    <div className="panel-container">
      <div className="disco-panel">
        <div className="panel-header">
          <Link href="/" className="back-button">
            Back
          </Link>
          {title && <h1 className="panel-title">{title}</h1>}
        </div>
        <div className="panel-content">
          {children}
        </div>
      </div>
    </div>
  );
}