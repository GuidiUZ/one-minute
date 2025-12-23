import Footer from './components/Footer';
import Header from './components/Header';
import HowWorks from './components/HowWorks';
import RandomQuestion from './components/RandomQuestion';
import { Fireworks } from '@fireworks-js/react'
import { useEffect } from 'react';

export default function App() {


  return (
    <div className="flex flex-col m-auto min-h-screen relative">
      <div className="fixed inset-0 z-[-2] w-screen h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="fixed inset-0 z-10 pointer-events-none">
      <Fireworks
      style={{
      width: "100%",
      height: "100%",
      }}
        options={{
          rocketsPoint: { min: 0, max: 100 },
          explosion: 5,
          particles: 100,
          opacity: 0.9
        }}
      />
    </div>
      <Header />
      <RandomQuestion />
      <HowWorks />
      <Footer />
    </div>
  );
}
