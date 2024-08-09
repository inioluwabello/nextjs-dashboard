import AstarLogo from '@/app/ui/astar-logo'
import styles from '@/app/ui/home.module.css';

export default function Footer() {
  return (

    <div className={styles.footer}>
      <div className={`${styles.column} ${styles.column1}`}>
        <AstarLogo />
        <p className='text-gray-400 py-2'>Radically improve global computation.</p>
      </div>
      <div className={`${styles.column} ${styles.column2}`}>
        <h5>About</h5>
        <p>Astar Core Values</p>
        <p>Team</p>
        <p>Investments</p>
        <p>Supporters</p>
        <p>Astar FAQs</p>
        <p>Astar Press Kit</p>
      </div>
      <div className={`${styles.column} ${styles.column3}`}>
        <h5>Product Information</h5>
        <p>Layout Problem</p>
        <p>Product Demo</p>
        <p>Product Demo (Summarized)</p>
        <p>Relevant Research</p>
      </div>
      <div className={`${styles.column} ${styles.column4}`}>
        <h5>Other Information</h5>
        <p>Sales Deck</p>
        <p>Investment Deck</p>
        <p>Product Team</p>
        <p>AI Team</p>
      </div>
      <div className={`${styles.column} ${styles.column5}`}>
        <h5>Join Newsletter</h5>
        <div>
          <input className={styles.input} placeholder="Enter Email Address" />
          <img src='/astar/input-btn.png' alt='addon' style={{cursor:"pointer", display: "inline-block", width: "31px", height: "26px",marginTop: "3px"}} />
        </div>
      </div>
    </div>
    
  );
}
