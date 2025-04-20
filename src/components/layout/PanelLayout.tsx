'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface PanelLayoutProps {
  children: ReactNode;
  title: string;
  titleColor?: string;
  borderColor?: string;
}

export default function PanelLayout({ 
  children, 
  title, 
  titleColor = 'linear-gradient(to right, #ff9900, #ff00ff)',
  borderColor = 'rgba(255, 0, 204, 0.7)'
}: PanelLayoutProps) {
  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(18, 18, 18, 0.95)',
      zIndex: 20,
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
      fontFamily: 'Poppins, Arial, sans-serif'
    }}>
      {/* Panel handle for swipe down */}
      <div 
        onClick={handleClose}
        style={{
          padding: '8px 0',
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          cursor: 'pointer'
        }}
      >
        <div style={{
          width: '40px',
          height: '5px',
          backgroundColor: 'rgba(255,255,255,0.3)',
          borderRadius: '3px'
        }}></div>
      </div>
      
      {/* Panel header */}
      <div style={{
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        background: 'linear-gradient(to right, rgba(36,14,50,0.8) 0%, rgba(18,18,18,0.8) 100%)'
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '24px',
          fontWeight: 'bold',
          background: titleColor,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          maxWidth: 'calc(100% - 50px)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {title}
        </h2>
        
        <button 
          onClick={handleClose}
          style={{
            width: '40px',
            height: '40px',
            minWidth: '40px',
            flexShrink: 0,
            background: 'linear-gradient(135deg, #ff00cc, #3333ff)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 15px rgba(255, 0, 204, 0.5)'
          }}
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      
      {/* Panel content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px'
      }}>
        {children}
      </div>
    </div>
  );
}