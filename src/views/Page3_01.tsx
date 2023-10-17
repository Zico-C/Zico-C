
import styles from"./page3_01.module.scss";
import { useTranslation , Trans } from "react-i18next";
import { useState }  from "react";
function View() {
    //使用 useTranslation 鉤子來獲取翻譯函數和當前語言設置
    const { t , i18n} = useTranslation();
    
    // const [saveLng,setSaveLng] = useState(i18n.languages[0]);

    // // 定義一個函數用於切換語言
    // const ChangeLng = (lng:any) =>{
    //     //固定寫法 i18n套件 changeLanguage("zh") = 中文語言
    //     //使用 i18n 對象的 changeLanguage 方法來切換語言
    //     i18n.changeLanguage(lng)
    //     setSaveLng(lng);
    // }

    

    const messages = ["message one", "message two"];
    const count = messages.length;
  
    const name = "ZICO";
  
    
    return(
        <div className={styles.main}>
        <p>這是Page3_01頁面內容</p>
        
        {/* 使用 t 函數來翻譯文本，"test" 是需要翻譯的鍵 */}
        {/* ("test",{語言包中的{name}給他插值:"ZICO"}) */}
        <p>{t("test", { name:"ZICO" } )}</p>
        <p>{t("content.Header")}</p>
        <p>{t("content.TableHead3")}</p>
        <p>{t("content.TableHead4")}</p>
        <p>{t("content.EV1")}</p>
        <p>{t("content.EV2")}</p>
        <p>{t("content.EV3")},{t("content.EV3")}</p>
        <p></p>
        {/* "_one" 和 "_other" 是用來處理不同數量的情況的翻譯鍵 
        "keyWithCount_one": "{{count}} item", <= {count: 1 }
        "keyWithCount_other": "{{count}} items" <= {count: 2 } 或者其他數 */}
        
        <p>{t("keyWithCount",{count: 1})}</p>
        
        {/* postProcess: "interval" 是一個固定寫法 , 逗點後面加上 
            count 數字範圍內的 文本內容，例如：
            (1)[one item];   =>  {postProcess: "interval",count:1} 顯示 (範圍1)
            (2-7)[a few items]; =>  {postProcess: "interval",count:2} 顯示 (範圍2~7)
            (10-inf)[a lot of items]; =>  {postProcess: "interval",count:100} 顯示 (範圍10 ~ 10以上的數字)
            inf =  infinity (無限)
        */}

        <p>{t("key1_interval",{postProcess: "interval",count:1})}</p>
        <p>{t("key1_interval",{postProcess: "interval",count:4})}</p>
        <p>{t("key1_interval",{postProcess: "interval",count:100})}</p>
        <br/>
        <Trans i18nKey="userMessagesUnread" count={count}>
        Hello <strong title={t("nameTitle")}>{{ name }}</strong>, you have
        {{ count }} unread message. <a to="/msgs">Go to messages</a>.
        </Trans>
        <br/>
        {/* 按鈕用於切換到英文語言 */}
        {/* <button onClick={() => ChangeLng("en")}>英文</button>
        {/* 按鈕用於切換到繁體中文語言 */}
        {/* <button onClick={() => ChangeLng("zh")}>中文</button> */} 
        </div>
    )
}

export default View