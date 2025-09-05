"use client"

import dynamic from 'next/dynamic'

// Dynamically import components that use browser APIs
const AnimatedRobot = dynamic(() => import('./AnimatedRobot'), {
  ssr: false,
  loading: () => <div style={{ display: 'none' }} />
})

const PixelCat = dynamic(() => import('./PixelCat'), {
  ssr: false,
  loading: () => <div style={{ display: 'none' }} />
})

const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
  loading: () => <div style={{ display: 'none' }} />
})

export { AnimatedRobot, PixelCat, ParticleBackground }
