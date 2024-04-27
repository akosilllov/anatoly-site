import Footer from "../footer";
import SubFooter from "../subFooter";
import style from "./style.module.css";

const FooterPages = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.quez}>ОСТАЛИСЬ ВОПРОСЫ?</div>
        <div className={style.connection}>СВЯЗАТЬСЯ С НАМИ</div>
      </div>
      <SubFooter textColor="white" backgroundColor="#222222" />
      <Footer color="#222222" />
    </>
  );
};

export default FooterPages;
