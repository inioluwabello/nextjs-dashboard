import Image from 'next/image'
import styles from '@/app/ui/home.module.css';

export default function Founders() {
  return (
    <section className={styles.founders}>
      <h2 className={styles.foundersTitle}>Meet the Founders</h2>
      <p style={{fontSize: "10px;", position: "relative", top: "-30px;"}}>The brains behind the vision</p>
      <div className={styles.foundersList}>
        <div className={styles.founder}>
          <Image src="/astar/juliet.png" width={50} height={50} alt="Founder 1" />
          <h4>CEO - Juliet Fords</h4>
          <p>Juliet has her background in electrical engineering and semi conductor design, and she worked in a semiconductor industry. She also has experience founding venture backed startups.</p>
        </div>
        <div className={styles.founder}>
          <Image src="/astar/kenny.png" width={50} height={50} alt="Founder 2" />
          <h4>CTO - Kenny Blaq</h4>
          <p>Kenny has his background in software  engineering and AI research. He has experience building application driven systems in startup companies.</p>
        </div>
        <div className={styles.founder}>
          <Image src="/astar/default-user.png" width={50} height={50} alt="Founder 3" />
          <h4>This could be you?</h4>
          <p>Armed with fresh capital and a transformative vision, Astar is expanding its founding team. If you're passionate about shaping the future of AI microchip design, we have a place for you.</p>
        </div>
      </div>
    </section>
  );
}
