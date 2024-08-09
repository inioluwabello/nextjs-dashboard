import Image from 'next/image'
import styles from '@/app/ui/home.module.css';

export default function Section1() {
  return (

    <div className='text-center'>
        <div className='py-3'>
          <Image style={{display: "inline-block"}} src="/astar/trusted-by.png" width={100} height={30} alt="Trusted By" />
        </div>

        <div>
          <div className={styles.trustedBy}>
            <Image src='/astar/trusted-by-1.png' width={100} height={25} alt='Trusted By 1' />
            <Image src='/astar/trusted-by-2.png' width={100} height={25} alt='Trusted By 2' />
            <Image src='/astar/trusted-by-3.png' width={100} height={25} alt='Trusted By 3' />
            <Image src='/astar/trusted-by-4.png' width={100} height={25} alt='Trusted By 4' />
          </div>
        </div>
        
        <div className={styles.spacer1}></div>
    </div>
    
  );
}
