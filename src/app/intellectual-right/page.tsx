"use client";
import { MagicMotion } from "react-magic-motion";
import styles from "./style.module.css";
import grabovskiy from "../assets/icons/grabovskiy.png";
import deyneko from "../assets/icons/deyneko.png";
import Card from "../components/card";
import Toggle from "../components/toggle";
import SideMenu from "../components/sideMenu";
import HeaderPages from "../components/headerPages";

const ArbitrationDisputes = () => {
  return (
    <div className={styles.container}>
      <HeaderPages />
      <div className={styles.block}>
        <div style={{ display: "flex", width: "200px" }}>
          <SideMenu top="200px" />
        </div>
        <div className={styles.blockCenter}>
          <h1 className={styles.title}>ИНТЕЛЛЕКТУАЛЬНОЕ ПРАВО</h1>
          <div className={styles.containerText}>
            <div className={styles.text}>
              Интеллектуальное право охватывает такие виды объектов, как
              авторское право, патентное право, товарные знаки, промышленные
              образцы, коммерческую тайну и другие формы интеллектуальной
              собственности. Интеллектуальное право предоставляет авторам,
              изобретателям и правообладателям правовую защиту и возможность
              контролировать использование своих интеллектуальных продуктов. Оно
              способствует стимулированию творчества и инноваций, поскольку
              обеспечивает возможность получения экономической выгоды от
              вложенных усилий. Юридическое бюро "Де-Юрекс" - это ведущая
              компания, специализирующаяся на оказании юридических услуг в
              области интеллектуального права. Наша команда состоит из
              высококвалифицированных патентных поверенных, адвокатов и юристов,
              имеющих обширный опыт работы и широкие знания в этой области. Мы
              предлагаем полный спектр услуг, связанных с интеллектуальной
              собственностью. Наша компетентность включает в себя
              регистрацию(депонирование) и защиту авторских прав, патентов,
              товарных знаков, промышленных образцов и других видов
              интеллектуальной собственности. Мы помогаем нашим клиентам
              разработать стратегию защиты и управления их интеллектуальными
              активами, а также предоставляем юридическую поддержку в случае
              возникновения споров или нарушений. Наш подход основан на
              индивидуальном отношении к каждому клиенту. Мы тщательно изучаем
              специфику бизнеса и потребности клиента, чтобы предложить наиболее
              эффективные решения. Мы также обеспечиваем конфиденциальность и
              надежность во всех наших действиях, гарантируя полную защиту
              интересов клиента. Кроме того, наше юридическое бюро имеет
              успешный опыт представления интересов клиентов в суде. Мы обладаем
              глубокими знаниями судебной практики в области интеллектуального
              права, что позволяет нам эффективно защищать права и интересы
              наших клиентов в судебных процессах. Если вам нужна юридическая
              помощь в области интеллектуального права, обратитесь к нам. Мы с
              удовольствием поможем вам защитить и обеспечить управление вашими
              интеллектуальными активами, а также предоставим экспертные
              рекомендации и юридическую поддержку. Юридическое бюро "Де-Юрекс"
              - ваш надежный партнер в области интеллектуального права.
            </div>
          </div>
          <div style={{ marginTop: "20px" }} className={styles.title}>
            ТОВАРНЫЕ ЗНАКИ
          </div>
          <MagicMotion>
            <Toggle text="Проверка и регистрация товарных знаков">
              <ul className={styles.containerList}>
                <li>
                  Подготовка договора отчуждения (продажа товарного знака) — от
                  5000 руб.
                </li>
                <li>Подготовка лицензионного договора — от 7000 руб.</li>
                <li>
                  Подготовка договора коммерческой концессии (франчайзинга) — от
                  12000 руб.
                </li>
                <li>
                  Государственная регистрация договора/ дополнительного
                  соглашения к договору в ФИПС — от 6000 руб
                </li>
              </ul>
            </Toggle>
          </MagicMotion>
          <MagicMotion>
            <Toggle text="Договоры в отношении товарных знаков">
              <ul className={styles.containerList}>
                <li>
                  Подготовка договора отчуждения (продажа товарного знака) — от
                  5000 руб.
                </li>
                <li>Подготовка лицензионного договора — от 7000 руб.</li>
                <li>
                  Подготовка договора коммерческой концессии (франчайзинга) — от
                  12000 руб.
                </li>
                <li>
                  Государственная регистрация договора/ дополнительного
                  соглашения к договору в ФИПС — от 6000 руб
                </li>
              </ul>
            </Toggle>
          </MagicMotion>
          <div className={styles.subTitle}>
            Важность Товарных Знаков для Бизнеса
          </div>
          <div className={styles.text}>
            В мире сегодняшнего бизнеса, где конкуренция резко возрастает, иметь
            уникальное и легко узнаваемое брендовое имя становится ключом к
            успеху. Именно поэтому защита интеллектуальной собственности,
            особенно в виде товарных знаков, становится все более важной для
            предпринимателей и компаний во всех отраслях. В этой статье мы
            рассмотрим, что представляют собой товарные знаки, почему они
            необходимы для вашего бизнеса и как Юридическое бюро Де-Юрекс может
            помочь в их защите.
          </div>
          <div className={styles.subTitle}>Что такое товарный знак?</div>
          <div className={styles.text}>
            Товарный знак – это символ, слово, фраза, дизайн или комбинация этих
            элементов, которые идентифицируют товары или услуги одного
            поставщика и отличают их от товаров или услуг других поставщиков.
            Примерами товарных знаков являются логотипы, названия брендов,
            слоганы и даже уникальные звуковые эффекты.
          </div>
          <div className={styles.subTitle}>Зачем нужны товарные знаки?</div>
          <div className={styles.text}>
            1. Защита бренда: Регистрация товарного знака дает владельцу
            исключительное право использовать этот знак в торговле, что защищает
            бренд от нежелательного использования конкурентами.
          </div>
          <div className={styles.text}>
            2. Строительство имиджа и узнаваемость: Уникальный товарный знак
            помогает создать узнаваемый образ бренда среди потребителей, что
            способствует росту лояльности и повышению уровня доверия к продукции
            или услугам.
          </div>
          <div className={styles.text}>
            3. Предотвращение путаницы: Регистрация товарного знака позволяет
            избежать путаницы среди потребителей относительно происхождения
            товаров или услуг, обеспечивая четкость и надежность бренда.
          </div>
          <div className={styles.text}>
            4. Актив защиты: Имея зарегистрированный товарный знак, вы получаете
            правовую защиту от нарушений со стороны конкурентов, что позволяет
            более эффективно бороться с нелегальным использованием вашего
            бренда.
          </div>
          <div className={styles.subTitle}>
            Как Юридическое бюро Де-Юрекс может помочь
          </div>
          <div className={styles.text}>
            Юридическое бюро Де-Юрекс специализируется на защите
            интеллектуальной собственности и предоставляет широкий спектр услуг
            по регистрации, защите и управлению товарными знаками. Наши опытные
            адвокаты и специалисты по интеллектуальной собственности обеспечат
            вас всесторонней защитой вашего бренда, помогая вам:
          </div>
          <div className={styles.text}>
            {" "}
            - Разработать стратегию регистрации товарного знака, учитывая
            особенности вашего бизнеса и рынка.
          </div>
          <div className={styles.text}>
            - Подготовить и подать заявку на регистрацию товарного знака в
            соответствии с требованиями законодательства.
          </div>
          <div className={styles.text}>
            {" "}
            - Провести поиск и анализ аналогичных или похожих знаков, чтобы
            избежать коллизий при регистрации.
          </div>
          <div className={styles.text}>
            {" "}
            - Предоставить экспертную помощь в случае возникновения споров или
            нарушений прав на ваш товарный знак.
          </div>
          <div style={{ marginTop: "20px" }} className={styles.text}>
            Товарные знаки играют ключевую роль в защите и продвижении бренда,
            обеспечивая ему конкурентное преимущество на рынке. Регистрация и
            эффективное управление товарными знаками являются важными шагами для
            любого бизнеса, стремящегося к успеху и устойчивому развитию.
            Обратившись в Юридическое бюро Де-Юрекс, вы получите надежного
            партнера в защите вашей интеллектуальной собственности и обеспечении
            безопасности вашего бренда.
          </div>
          <div className={styles.subTitle}>ПАТЕНТЫ</div>
          <MagicMotion>
            <Toggle text="Патентование">
              <ul className={styles.containerList}>
                <li>Патентный поиск — от 20000 руб.</li>
                <li>Патентование изобретения — от 30000 руб.</li>
                <li>Патентование полезной модели — от 28000 руб.</li>
                <li>Патентование промышленного образца — от 30000 руб.</li>
                <li>
                  Патентование полезной модели — от 28000 руб.
                  Продление/восстановление
                </li>
                <li>патента — от 5000 руб.</li>
              </ul>
            </Toggle>
          </MagicMotion>
          <MagicMotion>
            <Toggle text="Палата по патентным спорам">
              <ul className={styles.containerList}>
                <li>Патентный поиск — от 20000 руб.</li>
                <li>Патентование изобретения — от 30000 руб.</li>
                <li>Патентование полезной модели — от 28000 руб.</li>
                <li>Патентование промышленного образца — от 30000 руб.</li>
                <li>
                  Патентование полезной модели — от 28000 руб.
                  Продление/восстановление
                </li>
                <li>патента — от 5000 руб.</li>
              </ul>
            </Toggle>
          </MagicMotion>
          <div className={styles.subTitle}>
            Патенты - Ваш юридический щит в мире интеллектуальной собственности.
          </div>
          <div style={{ marginTop: "10px" }} className={styles.text}>
            В современном мире, где инновации являются двигателем прогресса,
            защита интеллектуальной собственности становится не просто важным
            элементом бизнес-стратегии, но и критическим фактором для сохранения
            конкурентного преимущества и устойчивого развития. Патенты играют
            ключевую роль в этом процессе, предоставляя эксклюзивные права на
            использование изобретений и новых технологий. В данной статье, мы,
            Юридическое бюро Де-Юрекс, расскажем вам о том, что такое патенты,
            их значении и процессе их получения.
          </div>
          <div className={styles.subTitle}>Что такое патент?</div>
          <div style={{ marginTop: "10px" }} className={styles.text}>
            Патент — это юридический документ, предоставляемый государственными
            органами, который дает изобретателю или правообладателю
            исключительное право на использование, производство, продажу или
            импорт изобретения на определенный период. В обмен на патентные
            права, изобретатель обязан раскрыть техническую информацию о своем
            изобретении, способствуя таким образом распространению знаний и
            инноваций.
          </div>
          <div className={styles.subTitle}>Значение патентов:</div> 
          <div className={styles.text}>
            1. Защита инвестиций: Патенты обеспечивают защиту вложений в
            разработку новых продуктов и технологий, позволяя изобретателям и
            компаниям окупить свои исследования и разработки. 
          </div>
          <div className={styles.text}>
            2. Повышение конкурентоспособности: Эксклюзивные права на
            изобретения помогают предприятиям удерживать лидирующие позиции на
            рынке, ограничивая конкуренцию.
          </div>
          <div className={styles.text}>
            3. Стимулирование инноваций: Патентная система стимулирует научные
            исследования и инновации, поощряя изобретателей и исследователей к
            созданию новых технологий и продуктов.
          </div>
          <div className={styles.text}>
            4. Генерирование дохода: Патенты могут стать источником дохода через
            лицензирование, продажу или сотрудничество с другими компаниями.
          </div>
          <div className={styles.text}>
            5. Международное признание: Патентное право имеет международный
            характер, что позволяет защищать ваше изобретение не только на
            внутреннем, но и на зарубежных рынках.
          </div>
          <div className={styles.subTitle}>Процесс получения патентов:</div> 
          <div className={styles.text}>
            1. Подготовка: Прежде всего, важно убедиться, что ваше изобретение
            является новым, имеет изобретательский уровень и промышленную
            применимость. Патентные поверенные юридического бюро «Де-Юрекс»
            поможет провести патентные поиски, чтобы убедиться в отсутствии
            аналогичных решений.
          </div>
          <div className={styles.text}>
            2. Подача заявки: Подайте патентную заявку в национальное или
            региональное патентное ведомство. Заявка должна включать описание
            изобретения, а также патентные претензии, определяющие объем
            правовой защиты.
          </div>
          <div className={styles.text}>
            3. Экспертиза: После подачи заявки она проходит формальную
            экспертизу, а затем – экспертизу по существу, в ходе которой
            проверяется соответствие изобретения критериям патентоспособности.
          </div>
          <div className={styles.text}>
            4. Публикация: Через некоторое время после подачи заявки информация
            о ней публикуется, что позволяет общественности ознакомиться с новым
            техническим решением.
          </div>
          <div className={styles.text}>
            5. Выдача патента: Если изобретение удовлетворяет всем требованиям,
            патентное ведомство выдает патент. 
          </div>
          <div className={styles.text}>
            6. Поддержание в силе: Для поддержания патента в силе необходимо
            выплачивать годовые пошлины.
          </div>
          <div style={{ marginTop: "15px" }} className={styles.text}>
            Патенты являются фундаментальным инструментом защиты
            интеллектуальной собственности, который обеспечивает правовую и
            экономическую защиту инвестиций в инновации. В Юридическом бюро
            Де-Юрекс, мы готовы предложить вам полный спектр услуг по
            патентованию, от подготовки и подачи заявок до сопровождения в
            случае споров. Свяжитесь с нами, чтобы убедиться, что ваше
            интеллектуальное творение получит заслуженную защиту и принесет
            максимальную пользу вашему бизнесу.
          </div>
          <h1 style={{ marginTop: "20px" }} className={styles.title}>
            АВТОРСКОЕ ПРАВО
          </h1>
          <div className={styles.textBlockItem}>
            Регистрация/депонирование авторских прав - от 5.000р
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            В современном мире творчество и инновации являются ключевыми
            факторами экономического развития и культурного обогащения общества.
            Авторское право играет важную роль в защите результатов
            интеллектуальной деятельности, обеспечивая авторам исключительные
            права на их работы и возможность получения заработка от их
            использования. Юридическое бюро "Де-Юрекс" предлагает вам
            ознакомиться с основными аспектами авторского права и способами его
            защиты.
          </div>
          <div className={styles.subTitle}>
            Основные права, предоставляемые авторским правом:
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            1. Исключительное право на воспроизведение произведения.
          </div>
          <div className={styles.text}>
            2. Право на распространение копий произведения публике.
          </div>
          <div className={styles.text}>
            3. Право на публичное исполнение произведения.
          </div>
          <div className={styles.text}>
            4. Право на адаптацию и переработку произведения (право на создание
            производных работ)
          </div>
          <div className={styles.text}>
            5. Право на публичное показ произведения.
          </div>
          <div className={styles.subTitle}>Как охраняется авторское право?</div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            Авторское право возникает автоматически с момента создания
            оригинального произведения и фиксации его в какой-либо материальной
            форме. Не требуется никаких специальных регистрационных действий для
            возникновения авторского права, однако регистрация (депонирование)
            может облегчить защиту прав в случае споров. Срок действия
            авторского права различается в зависимости от законодательства
            страны, но обычно он продолжается в течение всей жизни автора и еще
            определенное количество лет после его смерти (часто 50-70 лет).
          </div>
          <div className={styles.subTitle}>Защита авторского права:</div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            1. Регистрация(депонирование) авторского права, регистрация может
            служить официальным доказательством владения авторским правом.
          </div>
          <div className={styles.text}>
            2. Уведомление о правах: использование символа © с указанием имени
            владельца и года первой публикации может служить предупреждением
            потенциальным нарушителям.
          </div>
          <div className={styles.text}>
            3. Соглашения о неразглашении (NDA): в случае совместной работы или
            демонстрации произведения третьим лицам.
            <div className={styles.text}>
              4. Лицензирование и передача прав: формальные договоры,
              позволяющие другим использовать произведение на определенных
              условиях.
            </div>
            <div className={styles.text}>
              5. Судебныеиски: в случае нарушения авторских прав владелец может
              обратиться в суд для защиты своих прав и требования компенсации
              убытков.
            </div>
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            Авторское право является неотъемлемой частью юридической защиты
            интеллектуальной собственности. Оно призвано поддерживать и поощрять
            творческий процесс, предоставляя авторам контроль над их работами и
            возможность извлекать выгоду из их использования. Если у вас есть
            вопросы или вам требуется помощь в защите вашего авторского права,
            Юридическое бюро "Де-Юрекс" готово предоставить профессиональную
            поддержку и консультации.
          </div>
          <div style={{ marginTop: "10px" }} className={styles.title}>
            КОММЕРЧЕСКИЕ ОБОЗНАЧЕНИЯ
          </div>
          <div className={styles.containerBorderText}>
            <ul className={styles.containerBorderList}>
              <li>
                Проверка товарного знака (по базам заявок, Российских и
                международных товарных знаков с указанием РФ) — от 7000 руб.
              </li>
              <li>
                Регистрация товарного знака в России («под ключ», включая
                Проверку и ответы на запросы и уведомления экспертизы) — от
                15000 руб.
              </li>
              <li>
                Международная регистрация товарного знака по мадридской системе
                — от 30000 руб.
              </li>
            </ul>
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            Коммерческое обозначение – эффективный инструмент для защиты бизнеса
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            Коммерческое обозначение является важным элементом корпоративной
            идентичности и инструментом маркетинга, который позволяет
            потребителям отличать товары или услуги одного предприятия от
            товаров и услуг других. В данной статье мы рассмотрим основные
            аспекты коммерческого обозначения, его значение для бизнеса и
            возможности правовой защиты.
          </div>
          <div style={{ marginTop: "5px" }} className={styles.subTitle}>
            Что такое коммерческое обозначение:
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            Коммерческое обозначение – это знак, который используется
            предприятием для индивидуализации своей деятельности, включая
            наименование магазинов, кафе, ресторанов, сервисных центров и др.
            Оно может быть представлено в виде словесного, изобразительного,
            комбинированного знака или в иной форме, позволяющей отличать
            деятельность предприятия от деятельности конкурентов.
          </div>
          <div style={{ marginTop: "5px" }} className={styles.subTitle}>
            Значение коммерческого обозначения для бизнеса:
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            Коммерческое обозначение служит не только для узнаваемости бренда,
            но и является средством защиты интересов предприятия на рынке. Оно
            помогает формировать лояльность клиентов, поддерживать репутацию и
            увеличивать коммерческую ценность бизнеса. Кроме того,
            зарегистрированное коммерческое обозначение дает право на
            исключительное его использование, что предотвращает возможность
            недобросовестной конкуренции.
          </div>
          <div style={{ marginTop: "5px" }} className={styles.subTitle}>
            Правовая защита коммерческого обозначения:
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            Для получения правовой защиты владелец бизнеса должен
            зарегистрировать свое коммерческое обозначение в соответствующих
            органах. Процесс регистрации включает подачу заявки, экспертизу на
            уникальность и отсутствие путаницы с уже зарегистрированными
            обозначениями. После регистрации владелец получает свидетельство,
            подтверждающее его исключительные права на коммерческое обозначение.
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            В случае нарушения прав на коммерческое обозначение, владелец может
            обратиться в суд для пресечения нарушений и взыскания компенсации за
            нанесенный ущерб. Важно отметить, что защита прав распространяется
            не только на точное копирование, но и на сходные обозначения,
            которые могут вызывать у потребителей ассоциации с
            зарегистрированным брендом.
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            Однако следует иметь ввиду, что если коммерческое обозначение не
            зарегистрировано, то в рамках судебного разбирательства придется
            доказать, что обозначение принадлежит вам, является известным и
            ассоциируется с вашими товарами или услугами, а также что действия
            ответчика привели к путанице среди потребителей или нанесли вред
            вашему деловому имиджу.
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            Коммерческое обозначение играет ключевую роль в стратегии развития и
            защиты бизнеса. Оно помогает создавать надежный имидж компании и
            защищать ее интересы на рынке. Юридическое бюро "Де-Юрекс"
            предлагает полный спектр услуг по регистрации коммерческих
            обозначений, включая подготовку необходимой документации,
            представительство интересов клиентов в патентных ведомствах и судах.
            Обеспечение правовой защиты коммерческого обозначения – это
            инвестиция в безопасность и процветание вашего бизнеса.
          </div>
          <div className={styles.title}>ЗАЩИТА БРЕНДА В СУДЕ</div>
          <MagicMotion>
            <Toggle text="Суды">
              <ul className={styles.containerList}>
                <li>
                  Признание товарного знака недействительным вследствие
                  неиспользования (полное ведение дела в 1 инстанции, включая
                  составление необходимых документов и участие в заседаниях) —
                  от 45000 руб.
                </li>
                <li>
                  Оспаривание решения Роспатента (ФИПС) (полное ведение дела в 1
                  инстанции, включая составление необходимых документов и
                  участие в заседаниях) — от 40000 руб.
                </li>
                <li>
                  Защита нарушенных прав на товарный знак (полное ведение дела в
                  1 инстанции, включая составление необходимых документов и
                  участие в заседаниях) — от 50000 руб.
                </li>
                <li>Участие в судебном заседании — от 9000 руб.</li>
              </ul>
            </Toggle>
          </MagicMotion>
          <div className={styles.subTitle}>
            Защита бренда в суде: стратегии и рекомендации от юридического бюро
            "Де-Юрекс"
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            Всемирная экономика становится все более глобализованной, и в этом
            контексте бренд является одним из ключевых активов компании,
            играющим центральную роль в её развитии и успехе. Однако с ростом
            конкуренции увеличивается и количество случаев незаконного
            использования торговых марок, что может нанести серьезный урон
            репутации и финансовому положению владельца бренда. В юридическом
            бюро "Де-Юрекс" мы специализируемся на защите прав интеллектуальной
            собственности и предлагаем комплексное сопровождение дел о защите
            бренда в суде. В данной статье мы рассмотрим основные стратегии и
            рекомендации по защите вашей торговой марки.
          </div>
          <div style={{ marginTop: "7px" }} className={styles.text}>
            1. Зарегистрируйте свою торговую марку Первым и самым важным шагом в
            защите бренда является его официальная регистрация.
            Зарегистрированный бренд обеспечивает юридическую защиту и
            доказательную базу, что вы являетесь единственным законным
            владельцем торговой марки. В случае возникновения спора,
            зарегистрированный бренд значительно упрощает процесс доказывания
            ваших прав.
          </div>
          <div className={styles.text}>
            2. Мониторинг рынка Регулярный мониторинг рынка позволяет
            своевременно выявлять случаи незаконного использования вашего
            бренда. Чем раньше вы обнаружите нарушение, тем быстрее и
            эффективнее сможете отреагировать на него.
          </div>
          <div className={styles.text}>
            3. Досудебное урегулирование При выявлении нарушения прав на бренд
            важно сначала попытаться урегулировать конфликт досудебным порядком.
            Это может быть сделано путем направления претензионных писем,
            предложений о заключении лицензионного соглашения или иных мирных
            способов разрешения спора.
          </div>
          <div className={styles.text}>
            4. Сбор доказательств Перед тем как обратиться в суд, важно собрать
            все доказательства нарушения ваших прав. Это могут быть фотографии
            товаров с использованием вашего бренда, рекламные материалы, образцы
            фальсифицированной продукции и прочие материалы, подтверждающие факт
            нарушения.
          </div>
          <div className={styles.text}>
            5. Юридическое сопровождение Обращение в суд – процесс сложный и
            требующий глубоких знаний в области законодательства об
            интеллектуальной собственности. Профессиональные адвокаты и юристы
            "Де-Юрекс" помогут вам в подготовке искового заявления, разработке
            стратегии ведения дела, представлении интересов в суде и последующем
            исполнении судебных решений.
          </div>
          <div style={{ marginTop: "5px" }} className={styles.subTitle}>
            Стратегия ведения дела
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            В зависимости от сложности дела и наличия доказательств, наши
            специалисты разработают индивидуальную стратегию. Мы оценим риски,
            подготовим необходимые процессуальные документы и определим
            оптимальные тактики взаимодействия с противоположной стороной.
          </div>
          <div style={{ marginTop: "5px" }} className={styles.subTitle}>
            Последствия для нарушителя
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            В случае выигрыша дела в суде, нарушителю могут быть наложены
            различные виды ответственности: компенсация за незаконное
            использование от 10 тыс. до 5 млн. за каждое нарушение, взыскание
            убытков, изъятие и уничтожение контрафактной продукции, публикация
            решения суда и др. Это послужит сдерживающим фактором для будущих
            попыток нарушения прав на ваш бренд.
          </div>
          <div style={{ marginTop: "5px" }} className={styles.subTitle}>
            Профилактика нарушений
          </div>
          <div style={{ marginTop: "5px" }} className={styles.text}>
            После разрешения спора важно продолжать мониторинг рынка и принимать
            профилактические меры для предотвращения повторных нарушений. Это
            может включать в себя обучение сотрудников, информационные кампании
            и сотрудничество с правоохранительными органами. В юридическом бюро
            "Де-Юрекс" мы понимаем, насколько важна для бизнеса защита его
            интеллектуальной собственности, и предлагаем наш опыт и знания для
            эффективной защиты ваших прав. Обращайтесь к нам, и мы поможем
            сохранить ценность и репутацию вашего бренда.
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
            <Card
              src={grabovskiy}
              name="Анатолий Грабовский"
              background="#C7C7C7"
              jobTitle="Адвокат, Управляющий партнёр"
              emai="attorney@grade.law"
              linkText="Брошюра-портфолио"
              linkHref="https://grade.law/assets/grade_template/pdf/card_1.pdf"
            />
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

export default ArbitrationDisputes;
