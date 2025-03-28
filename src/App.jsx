import Footer from './components/Footer';
import Header from './components/Header';
import HowWorks from './components/HowWorks';
import RandomQuestion from './components/RandomQuestion';

export default function App() {
  return (
    <div className="flex flex-col m-auto min-h-screen">
      <div className="fixed top-0 z-[-2] w-screen h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />
      <RandomQuestion />
      <HowWorks />
      <Footer />
    </div>
  );
}
