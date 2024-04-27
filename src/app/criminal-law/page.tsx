"use client";
import styles from "./style.module.css";
import deyneko from "../assets/icons/deyneko.png";
import Card from "../components/card";
import SideMenu from "../components/sideMenu";
import HeaderPages from "../components/headerPages";

const CriminalLaw = () => {
  return (
    <div className={styles.container}>
      <HeaderPages />
      <div className={styles.block}>
        <div style={{ display: "flex", width: "200px" }}>
          <SideMenu top="200px" />
        </div>
        <div className={styles.blockCenter}>
          <h1 className={styles.title}>ИНТЕЛЛЕКТУАЛЬНОЕ ПРАВО</h1>
          <div style={{ marginTop: "20px" }} className={styles.subTitle}>
            Защита по уголовным делам: ваш щит в борьбе с обвинением
          </div>
          <div className={styles.text}>
            Уголовное право – это сфера, где ставки особенно высоки. Речь идет
            не просто о репутации, но и о свободе, правах и будущем обвиняемого.
            Сложность уголовного процесса и суровость возможных наказаний делают
            защиту по уголовным делам одним из самых важных направлений в
            юридической практике. В юридическом бюро "Де-Юрекс" мы понимаем
            весомость этой ответственности и стремимся оказать нашим клиентам
            квалифицированную и эффективную юридическую поддержку.
          </div>
          <div style={{ marginTop: "20px" }} className={styles.subTitle}>
            Наши принципы
          </div>
          <div className={styles.card}>
            1. Индивидуальный подход. Каждое уголовное дело уникально, и мы
            уделяем внимание всем деталям, чтобы найти наилучшую стратегию
            защиты.
          </div>
          <div className={styles.card}>
            2. Профессионализм и опыт. Наши адвокаты имеют обширный опыт ведения
            уголовных дел и постоянно повышают свою квалификацию.
          </div>
          <div className={styles.card}>
            3. Конфиденциальность. Мы гарантируем полную тайну адвокатской
            деятельности и защиту личных данных клиента
          </div>
          <div className={styles.card}>
            4. Защита прав и интересов. Наша цель – обеспечить защиту прав и
            законных интересов наших клиентов на всех этапах уголовного
            процесса.
          </div>
          <div style={{ marginTop: "20px" }} className={styles.subTitle}>
            Сферы нашей работы
          </div>
          <div style={{ marginTop: "20px" }} className={styles.text}>
            Предварительное расследование. На этом этапе особенно важно быстрое
            и грамотное вмешательство юриста, который может оказать влияние на
            сбор и оценку доказательств, а также добиться соблюдения прав
            подозреваемого или обвиняемого.
          </div>
          <div className={styles.text}>
            Подготовка к суду. Этап, на котором разрабатывается защитная
            стратегия, анализируются доказательства стороны обвинения и
            подготавливаются необходимые процессуальные документы.
          </div>
          <div className={styles.text}>
            Судебное разбирательство. Представление интересов клиента в суде,
            выступление с защитной речью, допрос свидетелей, презентация
            доказательств и аргументов в пользу клиента.
          </div>
          <div className={styles.text}>
            Послесудебная защита. В случае неудовлетворительного исхода дела мы
            готовы представлять интересы клиента при подаче апелляции, а также в
            ходе исполнения приговора.
          </div>
          <div style={{ marginTop: "20px" }} className={styles.subTitle}>
            Наш подход к защите
          </div>
          <div className={styles.text}>
            Мы тщательно анализируем материалы дела, взаимодействуем с клиентом
            для полного понимания обстоятельств и разрабатываем индивидуальную
            линию защиты. Наша цель – не только избежать наказания или добиться
            его снижения, но и минимизировать отрицательные последствия процесса
            для жизни клиента.
          </div>
          <div style={{ marginTop: "20px" }} className={styles.subTitle}>
            Почему выбирают "Де-Юрекс"?
          </div>
          <div className={styles.text}>
            - Опыт и доказанная эффективность. Мы имеем длительный опыт
            успешного ведения уголовных дел различной сложности.
          </div>
          <div className={styles.text}>
            - Адвокаты высокой квалификации. Наша команда состоит из
            профессионалов, способных решить юридические задачи любой сложности.
          </div>
          <div className={styles.text}>
            - Личный адвокат 24/7. В любое время дня и ночи наш клиент может
            рассчитывать на помощь и поддержку своего адвоката.
          </div>
          <div className={styles.text}>
            Если вы или ваши близкие столкнулись с уголовным преследованием, не
            теряйте драгоценное время. Обратитесь в юридическое бюро "Де-Юрекс"
            за профессиональной юридической защитой. Мы поможем вам обеспечить
            справедливость и защитить ваши права.
          </div>
        </div>
        <div>
          <div className={styles.priceContainer}>
            <div className={styles.price}>От 30.000 Р</div>
            <div className={styles.containerOrderService}>
              <div className={styles.orderService}>Заказать услугу</div>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
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
    </div>
  );
};

export default CriminalLaw;
