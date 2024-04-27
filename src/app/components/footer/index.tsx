import style from "./style.module.css";

interface FooterProps {
  color?: string;
}

const Footer: React.FC<FooterProps> = ({ color }) => {
  return (
    <div
      style={
        color ? { background: color } : { background: "rgba(34, 34, 34, 1)" }
      }
      className={style.footer}
    >
      <div className={style.containerTop}>
        <div className={style.containerTopText}>
          <div>© 2015 Юридическое бюро ДЕ-ЮРЕКС</div>
          <div>Все обращения конфиденциальны</div>
        </div>
      </div>
      <div className={style.containerBottom}>
        <div>
          <div>
            <a href="tel: +7 (812) 942-32-90">+7 (812) 942-32-90</a>
          </div>
          <div>Москва</div>
        </div>
        <div>
          <div>
            <a href="tel: +7 (812) 942-32-90">+7 (812) 942-32-90</a>
          </div>
          <div>Санкт-Петербург</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
