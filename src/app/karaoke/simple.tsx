'use client';

import Link from 'next/link';

export default function SimpleKaraokePage() {
  return (
    <div style={{
      backgroundColor: '#222',
      color: 'white',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{color: 'pink'}}>Karaoke Page</h1>
      
      <div style={{marginTop: '30px'}}>
        <h2 style={{color: 'lightblue'}}>Featured Tracks</h2>
        
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '15px',
          borderRadius: '10px',
          marginTop: '20px'
        }}>
          <h3>Teacher Anthem</h3>
          <p>With Vocals</p>
          <button style={{
            backgroundColor: 'purple',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Play
          </button>
        </div>
        
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '15px',
          borderRadius: '10px',
          marginTop: '20px'
        }}>
          <h3>Teacher Anthem</h3>
          <p>Karaoke Version</p>
          <button style={{
            backgroundColor: 'purple',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Play
          </button>
        </div>
      </div>
      
      <Link href="/" style={{
        display: 'block',
        marginTop: '40px',
        color: 'skyblue',
        textDecoration: 'none'
      }}>
        Back to Home
      </Link>
    </div>
  );
}