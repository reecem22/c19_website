// components/AOSInitializer.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    // Log to verify the effect is running
    console.log('AOSInitializer mounted, initializing AOS');
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Animate only once as you scroll
      // You can add more options here if needed
    });
    // Optionally, force a refresh after a delay in case the content loads later
    setTimeout(() => {
      AOS.refresh();
      console.log('AOS refreshed');
    }, 500);
  }, []);

  return null;
}
