import Image from 'next/image'
import styles from '@/app/ui/home.module.css';
import Frame from './frame';

export default function Section2() {
  return (

    <div className={`${styles.section2} text-center`}>
        <div className={styles.spacer1}></div>
        <div className="text-center py-6">
            <Image src="/astar/section2-header.png" width={500} height={70} alt="Section 2 Header" style={{margin: "0px auto"}} />

            <div className={styles.introText}>
              By fully automating analog layouts with Astar AI, design teams can build analog components in hours vs weeks.
            </div>
        </div>
        <div className={styles.spacer1}></div>

        <div className={styles.features}>
          <Frame src={`/astar/ellipse1.png`} 
            headerText='Circuit Schematic' 
            pText='Circuit designers upload their schematics' />

          <div><Image className={styles.line} src={`/astar/line.png`} width={200} height={4} alt='line' /></div>

          <Frame src={`/astar/ellipse2.png`} 
            headerText='Astar AI: Deep Reinforcement Learning and Planning'
            pText='Astar will learn the art of analog layout' />

          <div><Image className={styles.line} src={`/astar/line.png`} width={200} height={4} alt='line' /></div>

          <Frame src={`/astar/ellipse3.png`} 
            headerText='Analog Layout' 
            pText='Astar instantly generates quality layout' />
        </div>
    </div>
    
  );
}
