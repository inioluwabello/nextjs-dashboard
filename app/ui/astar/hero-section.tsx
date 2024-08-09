import AstarLogo from '@/app/ui/astar-logo'
import styles from '@/app/ui/home.module.css';
import Image from 'next/image'
import Buttons from './buttons';

export default function HeroSection() {
  return (

    <div className={styles.header}>
        <div className="text-center py-6">
            <Image src="/astar/intro-header.png" width={500} height={70} alt="Logo" style={{margin: "0px auto"}} />

            <div className={styles.introText}>
                “Global computation is a proxy to humanity's ability to solve problems. By 10x-ing global computation, we 10x our ability to solve the world's hardest problems.” - Juliet Fords
            </div>

            <Buttons />

            <Image className='py-5' src="/astar/hero-img.png" width={700} height={300} alt="Hero Image" style={{margin: "0px auto"}} />
        </div>
    </div>
    
  );
}
