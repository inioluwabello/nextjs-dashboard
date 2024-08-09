import styles from '@/app/ui/home.module.css';

export default function Final() {
  return (

    <div className={styles.final}>
      <p className={`text-gray-500`}>2024. All Rights Reserved. Designed by TECHiT</p>

      <div className={styles.finalImages}>
        <img src='/astar/instagram.png' />
        <img src='/astar/linkedin.png' />
      </div>
    </div>
    
  );
}
