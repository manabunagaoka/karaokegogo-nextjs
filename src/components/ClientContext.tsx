'use client';

import { useEffect } from 'react';

export default function ClientContext() {
  useEffect(() => {
    // Load the main.js script on the client side
    const mainScript = document.createElement('script');
    mainScript.src = '/js/main.js';
    mainScript.async = true;
    document.body.appendChild(mainScript);

    return () => {
      // Cleanup if needed
      document.body.removeChild(mainScript);
    };
  }, []);

  return null;
}