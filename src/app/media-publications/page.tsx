import Image from "next/image";
import HeaderPages from "../components/headerPages";
import SideMenu from "../components/sideMenu";
import SubFooter from "../components/subFooter";
import styles from "./style.module.css";
import smi from "../assets/icons/smi.png";
import vc from "../assets/icons/vc.png";
import fontanka from "../assets/icons/fontanka.png";

const MediaPublications = () => {
  return (
    <div>
      <div className={styles.container}>
        <HeaderPages isWhite />
        <div className={styles.block}>
          <div style={{ display: "flex", width: "200px" }}>
            <SideMenu top="200px" isBlack />
          </div>
          <div className={styles.blockCenter}>
            <Image
              style={{ cursor: "pointer" }}
              width={1092}
              height={501}
              src={smi}
              alt="не загрузилось"
            />
            <h1 className={styles.title}>ПУБЛИКАЦИИ СМИ</h1>
            <div className={styles.containerCard}>
              <a
                target="blank"
                className={styles.card}
                href="https://vc.ru/u/460157-victor-krass/109852-yuridicheskaya-igra-kak-forma-kapitalizma"
              >
                <Image
                  style={{ marginTop: "20px" }}
                  src={vc}
                  width={366}
                  height={525}
                  alt="не загрузилось"
                />
                <div>Выиграно уголовное дело,</div>
                <div style={{ marginBottom: "10px" }}>
                  подсудимого освободили в зале суда
                </div>
              </a>
              <a
                style={{ marginLeft: "20px" }}
                target="blank"
                className={styles.card}
                href="https://vc.ru/u/460157-victor-krass/109852-yuridicheskaya-igra-kak-forma-kapitalizma"
              >
                <Image
                  style={{ marginTop: "20px" }}
                  src={fontanka}
                  width={366}
                  height={525}
                  alt="не загрузилось"
                />
                <div>Фонтанк.ру - Анатолий Грабовский,</div>
                <div style={{ marginBottom: "10px" }}>
                  развод и раздел имущество
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.questionsBlock}>
        <div className={styles.questionText}>Остались вопросы?</div>
        <div className={styles.connection}>Связаться с нами</div>
      </div>
      <SubFooter textColor="black" backgroundColor="white" />
    </div>
  );
};

export default MediaPublications;
