"use client";
import style from "./style.module.css";
import { useRouter } from "next/navigation";
import { MagicMotion } from "react-magic-motion";
import React from "react";

const data = [
  {
    text: "Услуги",
    link: "/services",
  },
  {
    text: "Кейсы",
    link: "/cases",
  },
  {
    text: "Публикации СМИ",
    link: "/media-publications",
  },
  {
    text: "Связь с нами",
    link: "/contact-us",
  },
  {
    text: "О нас",
    link: "/about",
  },
];

const servicesLinks = [
  {
    text: "Арбитражные споры",
    link: "/arbitration-disputes",
  },
  {
    text: "Интелектуальное право",
    link: "/intellectual-right",
  },
  {
    text: "Банкротсво",
    link: "/bankruptcy",
  },
  {
    text: "Уголовное право",
    link: "/criminal-law",
  },
  {
    text: "Наследство",
    link: "/inheritance",
  },
  {
    text: "Больше услуг",
    link: "/other-services",
  },
];

interface SideMenuProps {
  top?: string;
  isBlack?: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ top, isBlack = false }) => {
  const router = useRouter();
  const [isActiveSeviceBlock, setActiveSeviceBlock] = React.useState(false);
  const styles = {
    top: top ? top : "100px",
    color: isBlack ? "rgba(0, 0, 0, 1)" : "white",
  };

  return (
    <MagicMotion>
      <div
        style={styles}
        className={isBlack ? style.containerBlack : style.containerWhite}
      >
        {data.map((el) => (
          <div
            onClick={
              el.link === "/services"
                ? () => setActiveSeviceBlock(!isActiveSeviceBlock)
                : () => router.push(el.link)
            }
            className={style.item}
          >
            {el.text}
            {el.link === "/services" && isActiveSeviceBlock && (
              <div className={style.servicesLinkContainer}>
                {servicesLinks.map((el) => (
                  <div
                    className={style.servicesLinkItem}
                    onClick={() => router.push(el.link)}
                  >
                    {el.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </MagicMotion>
  );
};

export default SideMenu;
