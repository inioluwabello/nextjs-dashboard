
import { Metadata } from 'next';
import Header from '@/app/ui/astar/header'
import HeroSection from '@/app/ui/astar/hero-section'
import styles from '@/app/ui/home.module.css';
import Section1 from './ui/astar/section1';
import Section2 from './ui/astar/section2';
import Founders from './ui/astar/founders';
import Compliance from './ui/astar/compliance';
import Integration from './ui/astar/integration';
import Testimonial from './ui/astar/testimonial';
import Empower from './ui/astar/empower';
 
export const metadata: Metadata = {
  title: 'Astar | Landing Page',
};

export default function Page() {


  return (
    <main className={`flex min-h-screen flex-col ${styles.background}`}style={{overflowY: "scroll"}}>
      <div className={styles.backgroundWrapper}>
        <Header />
        <HeroSection />
        <Section1 />
        <Section2 />
        <Founders />
        <Compliance />
        <Integration />
        <Testimonial />
        <Empower />
        <div className={styles.spacer1}></div>

      </div>
    </main>
  );
}
