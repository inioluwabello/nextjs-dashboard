import Image from 'next/image'
import styles from '@/app/ui/home.module.css';

export default function Integration() {
  return (

    <section className={styles.integration}>
      <div className={styles.integrationImage}>
        <Image src="/astar/integration-img.png" width={400} height={400} alt="Integration Image"/>
      </div>
      <div className={styles.integrationContent}>
        <h2 className={styles.integrationTitle}>Seamless Integration</h2>
        <p className={styles.integrationDescription}>
          Astar integrates into existing EDA tools, to read schematics and export layout files in the desired format.
        </p>
        <img 
          className={`${styles.button}`} 
          src="/astar/learn-more.png" 
          alt="Learn More" 
          style={{marginTop: "15px", marginBottom: "15px"}} />
        <p className={styles.integrationDescription}>
          “Global computation is a proxy to humanity's ability to solve problems. By 10x-ing global computation, we 10x our ability to solve the world's hardest problems.”
        </p>
        <p className={styles.integrationDescription}>
        -Juliet Fords, <span className='text-gray-500'>CEO, Astar</span>
        </p>
      </div>
    </section>
  );
}
