import React from 'react';
import { HeroSection } from './hero-odyssey';
import { HeroMobile } from './hero-mobile';
import { useIsMobile } from '../../hooks/useIsMobile';

export const HeroWrapper: React.FC = () => {
  const isMobile = useIsMobile(768); // md breakpoint

  return isMobile ? <HeroMobile /> : <HeroSection />;
};