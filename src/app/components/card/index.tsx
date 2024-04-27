import styles from "./style.module.css";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  src: StaticImageData;
  name: string;
  jobTitle: string;
  emai: string;
  linkHref: string;
  linkText: string;
  background?: string;
  tel?: string;
}

const Card: React.FC<CardProps> = ({
  src,
  name,
  jobTitle,
  emai,
  linkText,
  linkHref,
  background,
  tel,
}) => {
  return (
    <div className={styles.imgIcon}>
      <div className={styles.imgContainer}>
        <Image
          style={{ borderRadius: "30px", background }}
          width={260}
          height={298}
          src={src}
          alt="не загрузилось"
        />
      </div>

      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "10px",
        }}
      >
        <div className={styles.textName}>{name}</div>
        <div className={styles.jobTitle}>{jobTitle}</div>
        <div className={styles.container}>
          <a href={`mailto: ${emai}`}>{emai}</a>
          <a href={`tel: ${tel}`}>{tel}</a>
        </div>

        <a target="blank" href={linkHref}>
          {linkText} ›
        </a>
      </div>
    </div>
  );
};

export default Card;
