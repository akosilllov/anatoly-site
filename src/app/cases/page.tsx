"use client";
import Image from "next/image";
import React from "react";
import grabovskiy from "../assets/icons/grabovskiy.png";
import deyneko from "../assets/icons/deyneko.png";
import HeaderPages from "../components/headerPages";
import SideMenu from "../components/sideMenu";
import SubFooter from "../components/subFooter";
import styles from "./style.module.css";
import arrowDown from "../assets/icons/arrowDown.png";
import arrowUp from "../assets/icons/arrowUp.png";
import Card from "../components/card";
import { MagicMotion } from "react-magic-motion";

const Cases = () => {
  const [case1, setCase1] = React.useState(false);
  return (
    <div>
      <div className={styles.container}>
        <HeaderPages isWhite />
        <div className={styles.block}>
          <div style={{ display: "flex", width: "200px" }}>
            <SideMenu top="200px" isBlack />
          </div>
          <div className={styles.blockCenter}>
            <MagicMotion>
              <>
                <div
                  style={{
                    backgroundImage:
                      "url(`../assets/icons/casesGrabovskiy.png`)",
                  }}
                  className={styles.case}
                >
                  {!case1 && (
                    <div style={{ marginBottom: "20px" }}>
                      Адвокат Грабовский Анатолий Аркадьевич юридического бюро
                      "Де-Юрекс", действуя в интересах своего клиента ООО «КМЗ»,
                      добился в Роспатенте признания недействительным патента
                      Российской Федерации...
                    </div>
                  )}

                  <div>
                    <Image
                      onClick={() => {
                        setCase1(!case1);
                      }}
                      style={{
                        marginBottom: "20px",
                        cursor: "pointer",
                        color: "white",
                      }}
                      height={15}
                      width={128}
                      src={!case1 ? arrowDown : arrowUp}
                      alt="Не загрузилось"
                    />
                  </div>
                </div>
                {case1 && (
                  <div style={{ marginTop: "20px" }}>
                    <div className={styles.text}>
                      Адвокат Грабовский Анатолий Аркадьевич юридического бюро
                      "Де-Юрекс" действуя в интересах своего клиента ООО «КМЗ»
                      добился в Роспатенте признания недействительным патента
                      Российской Федерации No 104246 на полезную модель поршень
                      для двигателя внутреннего сгорания. Однако владелец
                      патента - ПАО "КАМАЗ" категорически не хотел с этим
                      соглашаться и оспорил такое решение Роспатента в суде.
                    </div>
                    <div className={styles.text}>
                      Адвокат Грабовский А.А. отстоял решение Роспатента в суде
                      и доказал несоответствие полезной модели по патенту
                      Российской Федерации No 104246 условию патентоспособности
                      «новизна». Дело № СИП-801/2020. По мнению Роспатента,
                      материалы возражения Грабовского А.А. подтверждают
                      несоответствие полезной модели по патенту Российской
                      Федерации No 104246 условию патентоспособности «новизна»
                    </div>
                    <div className={styles.text}>
                      Грабовский А.А. представил отзыв на заявление, в котором
                      сообщил, что считает требования заявителя необоснованными
                      и не подлежащими удовлетворению. Пояснил, что рисунки
                      5.71, 5.72, 5,73 на страницах 360, 361 являются
                      информативными, отметил, что источником информации
                      являются, в том числе эскизы, чертежи и изображения,
                      указывающие на наличие того или иного отличительного
                      признака. Из упомянутых рисунков, по мнению Грабовского
                      А.А., очевидно, что поршень, описанный в источнике 1,
                      имеет на днище две выборки, смещенные в одну сторону
                      относительно оси отверстия под палец. Также Грабовский
                      А.А. выразил несогласие с позицией заявителя относительно
                      несостоятельности признаков, описанных на рисунке 5.64
                      6(страница 351). В подтверждение этого указал, что на
                      рисунке 5.64 «А» отчетливо видна овализация днища поршня
                      поего верхней кромке, а в таблице 5.10 на странице 352
                      указана величина овализации 0,002 мм (первая строка
                      параметров).
                    </div>
                    <div className={styles.text}>
                      {" "}
                      Также Грабовский А.А. отметил, что формулировка в тексте
                      «Днище поршня практически неовализируется» является
                      формальной, так как визуально, без специальных средств
                      контроля ее не определить, но на рисунке 5.64 «А»
                      (страница 351) овализация присутствует. По мнению
                      Грабовского А.А., в патенте No 104246 величина овализации
                      не указана. В этой связи утверждение ПАО "КАМАЗ" о наличии
                      овализации профиля поршня без уточнения конкретных
                      параметров не является новизной при существовании
                      источника 1 на момент регистрации оспариваемой полезной
                      модели. Также Грабовский А.А. выразил несогласие с доводом
                      общества «КАМАЗ» о несостоятельности вывода Роспатента по
                      поводу бочкообразности поршня.{" "}
                    </div>
                    <div className={styles.text}>
                      Грабовский А.А отмечает, что согласно источнику 1
                      исследовался поршень к двигателю КамАз-7482, в свою
                      очередь в соответствии с решением Роспатента от 21.07.2020
                      все признаки, описанные в патенте No 104246, присущи в том
                      числе поршню для двигателя КамАз-7482. Подробнее вы можете
                      ознакомиться с решением на сайте Арбитражного суда.
                    </div>
                    <div className={styles.card}>
                      Решение суда состоялось против ПАО "КАМАЗ", вынесено в
                      интересах ООО "КМЗ" и в пользу Грабовского А.А., что дает
                      право добросовестным производителям поршней для двигателей
                      внутреннего сгорания соответствующей модели выпускать
                      продукцию на рынок без дополнительных издержек.
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <Image
                        onClick={() => {
                          setCase1(!case1);
                        }}
                        style={{
                          marginBottom: "20px",
                          cursor: "pointer",
                          color: "white",
                        }}
                        height={15}
                        width={128}
                        src={arrowUp}
                        alt="Не загрузилось"
                      />
                    </div>
                  </div>
                )}
                <div className={styles.case}>
                  {!case1 && (
                    <div style={{ marginBottom: "20px" }}>
                      Адвокат Грабовский Анатолий Аркадьевич юридического бюро
                      "Де-Юрекс", действуя в интересах своего клиента ООО «КМЗ»,
                      добился в Роспатенте признания недействительным патента
                      Российской Федерации...
                    </div>
                  )}

                  <div>
                    <Image
                      onClick={() => {
                        setCase1(!case1);
                      }}
                      style={{
                        marginBottom: "20px",
                        cursor: "pointer",
                        color: "white",
                      }}
                      height={15}
                      width={128}
                      src={!case1 ? arrowDown : arrowUp}
                      alt="Не загрузилось"
                    />
                  </div>
                </div>
              </>
            </MagicMotion>
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
                linlHref="https://grade.law/assets/grade_template/pdf/card_1.pdf"
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
                linlHref="https://grade.law/assets/grade_template/pdf/card_1.pdf"
              />
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

export default Cases;
