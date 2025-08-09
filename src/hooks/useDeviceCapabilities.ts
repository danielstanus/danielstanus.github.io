'use client';

import { useState, useEffect } from 'react';

interface DeviceCapabilities {
  isMobile: boolean;
  isLowEndDevice: boolean;
  prefersReducedMotion: boolean;
  connectionSpeed: 'slow' | 'fast' | 'unknown';
  deviceMemory: number;
  hardwareConcurrency: number;
}

export const useDeviceCapabilities = (): DeviceCapabilities => {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isLowEndDevice: false,
    prefersReducedMotion: false,
    connectionSpeed: 'unknown',
    deviceMemory: 4, // Default fallback
    hardwareConcurrency: 4, // Default fallback
  });

  useEffect(() => {
    const detectCapabilities = () => {
      // Detect mobile
      const isMobile = window.matchMedia('(max-width: 768px)').matches || 
                      'ontouchstart' in window || 
                      navigator.maxTouchPoints > 0;

      // Detect reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Get device memory (if available)
      const deviceMemory = (navigator as any).deviceMemory || 4;

      // Get hardware concurrency
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;

      // Detect connection speed
      let connectionSpeed: 'slow' | 'fast' | 'unknown' = 'unknown';
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      
      if (connection) {
        const effectiveType = connection.effectiveType;
        connectionSpeed = ['slow-2g', '2g', '3g'].includes(effectiveType) ? 'slow' : 'fast';
      }

      // Determine if it's a low-end device
      const isLowEndDevice = deviceMemory <= 2 || 
                            hardwareConcurrency <= 2 || 
                            connectionSpeed === 'slow' ||
                            isMobile;

      setCapabilities({
        isMobile,
        isLowEndDevice,
        prefersReducedMotion,
        connectionSpeed,
        deviceMemory,
        hardwareConcurrency,
      });
    };

    detectCapabilities();

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    
    const handleMotionChange = () => detectCapabilities();
    const handleMobileChange = () => detectCapabilities();
    
    mediaQuery.addEventListener('change', handleMotionChange);
    mobileQuery.addEventListener('change', handleMobileChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      mobileQuery.removeEventListener('change', handleMobileChange);
    };
  }, []);

  return capabilities;
};