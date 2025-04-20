import './karaoke.css';

export default function KaraokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="karaoke-layout">
      {children}
    </div>
  );
}