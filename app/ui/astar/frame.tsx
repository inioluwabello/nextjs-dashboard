import styles from "@/app/ui/home.module.css";
import Image from "next/image";

export default function Frame({
  src,
  headerText,
  pText,
}: {
  src: string;
  headerText: string;
  pText: string;
}) {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <div className={styles.frame}>
          <div className={styles.featureCircle}>
            <Image src={src} width={50} height={50} alt="Ellipse 1" />
          </div>

          <h3 className={styles.featureTitle}>{headerText}</h3>
          <p className={styles.featureDescription}>{pText}</p>
        </div>
      </div>
    </section>
  );
}
