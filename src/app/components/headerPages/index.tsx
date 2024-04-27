"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../assets/icons/logo.png";
import logoBlack from "../../assets/icons/logoBlack.png";
import styles from "./style.module.css";

interface HeaderPagesProps {
  isWhite?: boolean;
}

const HeaderPages: React.FC<HeaderPagesProps> = ({ isWhite = false }) => {
  const router = useRouter();
  const style = {
    background: isWhite ? "white" : "#282828",
    color: isWhite ? "rgba(0, 0, 0, 1)" : "white",
  };
  return (
    <div style={style} className={styles.container}>
      <Image
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
        width={418}
        height={105}
        src={isWhite ? logoBlack : logo}
        alt="не загрузилось"
      />
      <div className={styles.itemRign}>
        <div>
          <a href="tel: +7 (812) 942-32-90">+7 (812) 942-32-90</a>
        </div>
        <div>Москва</div>
      </div>
      <div className={styles.itemRign}>
        <div>
          <a href="tel: +7 (812) 942-32-90">+7 (812) 942-32-90</a>
        </div>
        <div>Санкт-Петербург</div>
      </div>
    </div>
  );
};

export default HeaderPages;
