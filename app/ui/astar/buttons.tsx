import styles from '@/app/ui/home.module.css';
// import Image from 'next/image'

export default function Buttons() {
  return (

    <div style={{textAlign: "center"}} className='p-5'>
        <img className={`${styles.button} ${styles.buttonPry}`} src="/astar/learn-more.png" alt="Learn More"  />
        <img className={styles.button} src="/astar/contact-us.png" alt="Contact Us" />
    </div>
    
  );
}
