import Image from "next/image";
import grabovskiy from "../assets/icons/grabovskiy.png";
import deyneko from "../assets/icons/deyneko.png";
import styles from "./style.module.css";
import grabovskiyAbout from "../assets/icons/grabovskiyAbout.png";
import deynekoAbout from "../assets/icons/deynekoAbout.png";
import blagLetter from "../assets/icons/blagLetter.png";
import recLetter from "../assets/icons/recLetter.png";
import HeaderPages from "../components/headerPages";
import SideMenu from "../components/sideMenu";
import Card from "../components/card";

export default function About() {
  return (
    <div className={styles.container}>
      <HeaderPages isWhite />
      <div className={styles.block}>
        <div style={{ display: "flex", width: "200px" }}>
          <SideMenu top="200px" isBlack />
        </div>
        <div style={{ width: "900px" }}>
          <div className={styles.lawOffice}>
            <Image
              width={406}
              height={378}
              src={grabovskiyAbout}
              alt="не загрузилось"
            />
            <div className={styles.lawOfficeText}>
              Адвокатское бюро Грабовский и Дейнеко GRADE™ (Grabovskii & Deyneko
              Law Firm) объединяет опытных адвокатов, которые являются
              признанными специалистами в своей области. География услуг
              включает не только территорию России, но и СНГ, Европу, Дальний
              Восток, Северную Америку. Команда бюро в Санкт-Петербурге включает
              3 обособленных офиса (подразделения): судебная практика,
              бухгалтерский учёт и аудит, авторское и патентное право.
            </div>
          </div>
          <div className={styles.partnerExperience}>
            <div className={styles.partnerExperienceText}>
              Опыт партнёров фирмы адвоката Дейнеко Олега Олеговича и
              Грабовского Анатолия Аркадьевича включает в себя оказание правовой
              помощи и достижение результата в делах доверителей с Федеральной
              Налоговой Службой РФ, Главном Следственном комитетом РФ,
              Федеральной Антимонопольной Службой РФ, в Палате по патентным
              спорам РФ, в Комитете по имущественным отношениям
              Санкт-Петербурга, среди клиентов: Отель Лотте Санкт-Петербург,
              Отель Кемпински Мойка, Х5 Ретейл Групп, ГБОУ Олимпийские надежды,
              ПАО Балтинвестбанк, Бадри Шенгелия, а также частные лица,
              владельцы крупных холдингов собственников недвижимости в
              историческом центре Санкт-Петербурга и Москвы.
            </div>
            <Image
              width={406}
              height={378}
              src={deynekoAbout}
              alt="не загрузилось"
            />
          </div>
          <div className={styles.title}>Некоторые проекты</div>
          <div className={styles.title}>Де-Юрекс:</div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              Более 100 выигрышных арбитражных споров в сфере строительного
              подряда сложных категорий;
            </div>
            <div className={styles.card}>
              Более 1000 успешных процедур банкротства граждан (полное
              освобождение от долгов) и предприятий, включая особо сложные дела
              (ООО «Санкт-Петербургская лизинговая компания») с задолженностью 3
              млрд.+;
            </div>
            <div className={styles.card}>
              Добились взыскания алиментов в процентах и твердой денежной сумме
              одновременно, тем самым сформировав новую практику по семейным
              спорам о взыскании алиментов;
            </div>
          </div>
          <div className={styles.containerLetter}>
            <Image
              style={{ marginRight: "20px" }}
              width={384}
              height={514}
              src={recLetter}
              alt="не загрузилось"
            />
            <Image
              style={{ marginLeft: "20px" }}
              width={384}
              height={514}
              src={blagLetter}
              alt="не загрузилось"
            />
          </div>
        </div>
        <div>
          <div>
            <Card
              src={grabovskiy}
              name="Анатолий Грабовский"
              background="#C7C7C7"
              jobTitle="Адвокат, Управляющий партнёр"
              emai="attorney@grade.law"
              linkText="Брошюра-портфолио"
              linkHref="https://grade.law/assets/grade_template/pdf/card_1.pdf"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Card
              src={deyneko}
              background="#C7C7C7"
              name="Олег Дейнеко"
              jobTitle="Адвокат, Управляющий партнёр"
              emai="attorney@grade.law"
              linkText="Брошюра-портфолио"
              linkHref="https://grade.law/assets/grade_template/pdf/card_1.pdf"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
