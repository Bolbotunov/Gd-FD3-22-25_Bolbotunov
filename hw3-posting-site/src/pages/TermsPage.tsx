import { TitleTermsStyles } from "../styles/MyContent.styled";
import { TextTermsStyles } from "../styles/MyContent.styled";

export default function TermsPage() {
    const terms = {
        "Условия использования сайта": "",
        "1. Введение": "Добро пожаловать на наш сайт. Используя данный сайт, вы соглашаетесь с нижеприведёнными условиями и положениями. Если вы не согласны с этими условиями, пожалуйста, прекратите использование сайта.",
        "2. Использование контента": "Все материалы, представленные на сайте, включая тексты, изображения, графику и программный код, защищены авторскими правами и не могут быть воспроизведены, распространены или использованы без предварительного письменного согласия правообладателей.",
        "3. Личная информация": "Мы собираем и обрабатываем личную информацию в соответствии с нашей Политикой конфиденциальности. Используя наш сайт, вы соглашаетесь с условиями сбора и обработки личной информации.",
        "4. Ответственность": "Администрация сайта не несёт ответственности за возможные убытки, возникшие в результате использования материалов сайта, а также за возможные последствия использования информации, размещённой на сайте.",
        "5. Изменения условий": "Мы оставляем за собой право изменять или обновлять данные условия в любое время без предварительного уведомления. Продолжая использовать сайт после внесения изменений, вы соглашаетесь с обновлёнными условиями.",
        "6. Обратная связь": "Если у вас есть вопросы или предложения по использованию сайта, вы можете связаться с нами через форму обратной связи, доступную на странице Контакты."
    };
    
    const titleTerms = Object.keys(terms)
    const textTerms = Object.values(terms)


    return (
        <>
            <div style={{width:'90%', padding:'40px'}}>
                {titleTerms.map((item, index) => (
                    <>
                    <TitleTermsStyles>{item}</ TitleTermsStyles>
                    <TextTermsStyles>{textTerms[index]}</TextTermsStyles>
                    </>
                ))}
            </div>
        </>
    )
}