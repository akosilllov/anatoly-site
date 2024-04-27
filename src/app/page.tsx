"use client";
import React from "react";
import Image from "next/image";
import { MagicMotion } from "react-magic-motion";
import { useRouter } from "next/navigation";
import SideMenu from "./components/sideMenu";
import SubFooter from "./components/subFooter";
import logo from "./assets/icons/logo.png";
import style from "./page.module.css";
import main1 from "./assets/icons/main1.png";
import main2 from "./assets/icons/main2.png";
import main3 from "./assets/icons/main3.png";
import main4 from "./assets/icons/main4.png";

const backgroundImagesArr = [main1, main2, main3, main4];

export default function Home() {
  const [mainPage, setMainPage] = React.useState(0);
  const [timeId, setTimeId] = React.useState<NodeJS.Timeout | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    const timeId = setInterval(() => {
      setMainPage((prev) => {
        if (prev <= 2) {
          return prev + 1;
        }
        return 0;
      });
    }, 3000);
    setTimeId(timeId);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  const handleClickEllipse = (num: number) => {
    if (timeId) {
      clearInterval(timeId);
    }
    setMainPage(num);
  };

  return (
    <div style={{ background: "#282828" }}>
      <div
        style={{
          backgroundImage: "url(" + backgroundImagesArr[mainPage]?.src + ")",
        }}
        className={style.main}
      >
        <div className={style.header}>
          <div />
          <Image
            onClick={() => router.push("/")}
            style={{
              position: "fixed",
              top: "35px",
              right: "35px",
              cursor: "pointer",
            }}
            width={418}
            height={105}
            src={logo}
            alt="не загрузилось"
          />
        </div>
        <SideMenu />

        <MagicMotion>
          <>
            <div style={{ top: "550px", position: "fixed" }}>
              <div className={style.mainText}>
                <a href="tel: +7 (812) 942-32-90">+7 (812) 942-32-90</a>
              </div>
              <div className={style.mainText}>Санкт-Петербург</div>
            </div>

            <div
              style={{ marginTop: "650px" }}
              className={style.mainContainerBottom}
            >
              <div />
              <div style={{ top: "700px", position: "fixed" }}>
                <div className={style.mainText}>
                  <a href="tel: +7 (812) 942-32-90">+7 (812) 942-32-90</a>
                </div>
                <div className={style.mainText}>Москва</div>
              </div>
              <div>
                <div className={style.mainTextUrBuro}>ЮРИДИЧЕСКОЕ БЮРО,</div>
                <div className={style.mainTextProblem}>
                  КОТОРОЕ РЕШИТ ВАШИ ПРОБЛЕМЫ
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div className={style.contactMe}>СВЯЗАТЬСЯ С НАМИ</div>
                </div>
              </div>
            </div>
            <div className={style.ellipseContainer}>
              <div className={style.ellipseBottomContainer}>
                <div
                  style={{ background: mainPage === 0 ? "#A6A6A6" : "" }}
                  className={style.ellipse}
                  onClick={() => {
                    handleClickEllipse(0);
                  }}
                />
                <div
                  style={{ background: mainPage === 1 ? "#A6A6A6" : "" }}
                  className={style.ellipse}
                  onClick={() => {
                    handleClickEllipse(1);
                  }}
                />
                <div
                  style={{ background: mainPage === 2 ? "#A6A6A6" : "" }}
                  className={style.ellipse}
                  onClick={() => {
                    handleClickEllipse(2);
                  }}
                />
                <div
                  style={{ background: mainPage === 3 ? "#A6A6A6" : "" }}
                  className={style.ellipse}
                  onClick={() => {
                    handleClickEllipse(3);
                  }}
                />
              </div>
            </div>
          </>
        </MagicMotion>
      </div>
      <div className={style.arbitrationDisputes}>
        <div>
          <div className={style.criminalLawText}>АРБИТРАЖНЫЕ СПОРЫ</div>
          <div className={style.container}>
            <div
              onClick={() => router.push("/arbitration-disputes")}
              className={style.moreDetailsArbitrationDisputes}
            >
              ПОДРОБНЕЕ
            </div>
          </div>
        </div>
      </div>
      <div className={style.intellectualRight}>
        <div className={style.intellectualRightContainer}>
          <div className={style.intellectualRightLeft}>
            <div>
              <div className={style.criminalLawText}>ИНТЕЛЕКТУАЛЬНОЕ ПРАВО</div>
              <div className={style.container}>
                <div
                  onClick={() => router.push("/intellectual-right")}
                  className={style.moreDetailsCriminalLaw}
                >
                  ПОДРОБНЕЕ
                </div>
              </div>
            </div>
          </div>
          <div className={style.intellectualRightText}>
            товарные знаки <br />
            патенты
            <br />
            коммерческие обозначения <br />
            защита бренда в суде <br />
          </div>
        </div>
      </div>
      <div className={style.inheritance}>
        <div className={style.inheritanceTextContainer}>
          <div className={style.inheritanceText}>
            принятие наследства
            <br /> сопровождение наследственного дела <br />
            наследственные споры
          </div>
        </div>
        <div className={style.inheritanceContainer}>
          <div style={{ margin: "0 185px 40px 0" }}>
            <div className={style.criminalLawText}>НАСЛЕДСТВО</div>
            <div className={style.container}>
              <div
                onClick={() => router.push("/inheritance")}
                className={style.moreDetailsCriminalLaw}
              >
                ПОДРОБНЕЕ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.criminalLaw}>
        <div>
          <div className={style.criminalLawText}>УГОЛОВНОЕ ПРАВО</div>
          <div className={style.container}>
            <div
              onClick={() => router.push("/criminal-law")}
              className={style.moreDetailsCriminalLaw}
            >
              ПОДРОБНЕЕ
            </div>
          </div>
        </div>
      </div>
      <div className={style.bankruptcy}>
        <div>
          <div className={style.bankruptcyText}>БАНКРОТСТВО</div>
          <div className={style.container}>
            <div
              onClick={() => router.push("/bankruptcy")}
              className={style.moreDetails}
            >
              ПОДРОБНЕЕ
            </div>
          </div>
        </div>
      </div>
      <div className={style.moreService}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/other-services")}
        >
          Больше услуг
        </div>
      </div>
      <SubFooter textColor="black" backgroundColor="white" />
    </div>
  );
}
