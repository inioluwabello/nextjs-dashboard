import Image from 'next/image'
import styles from '@/app/ui/home.module.css';

export default function Compliance() {
  return (
    <section className={styles.compliance}>
      <div className={styles.complianceContent}>
        <h2 className={styles.complianceTitle}>Always DRC and LVS Compliant</h2>
        <p className={styles.complianceDescription}>
          Astar automates DRC and LVS checks. Generating design layouts, even for the most challenging circuits, is a breeze with Astar’s AI-powered technology. By adhering to stringent design rules and verifying layout-versus-schematic accuracy, Astar ensures the highest quality in chip design.
        </p>
        <img className={`${styles.button}`} src="/astar/learn-more.png" alt="Learn More"  />
      </div>
      <div className={styles.complianceImage}>
        <Image src="/astar/compliance-img.png" width={400} height={400} alt="Compliance Layout"/>
      </div>
    </section>
  );
}
