import AstarLogo from '@/app/ui/astar-logo'
import styles from '@/app/ui/home.module.css';

export default function Header() {
  return (

    <div className={styles.header}>
        <AstarLogo />
    </div>
    
  );
}
