"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../assets/icons/logo.png";
import styles from "./style.module.css";

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.containerItem}>
        <div className={styles.item}>Услуги</div>
        <div className={styles.item}>Кейсы</div>
        <div className={styles.item}>Публикации СМИ</div>
        <div onClick={() => router.push("/about")} className={styles.item}>
          О нас
        </div>
      </div>

      <Image
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
        width={418}
        height={105}
        src={logo}
        alt="не загрузилось"
      />
      <div className={styles.containerItem}>
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
    </div>
  );
};

export default Header;
