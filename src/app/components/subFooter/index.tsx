import style from "./style.module.css";

interface SubFooterProps {
  backgroundColor: "black" | "white" | string;
  textColor: "black" | "white" | string;
}

const SubFooter: React.FC<SubFooterProps> = ({
  backgroundColor,
  textColor,
}) => {
  return (
    <div
      className={style.container}
      style={{ background: backgroundColor, color: textColor }}
    >
      <div className={style.item}>Услуги</div>
      <div className={style.item}>Кейсы</div>
      <div className={style.item}>Публикации СМИ</div>
      <div className={style.item}>О нас</div>
    </div>
  );
};

export default SubFooter;
