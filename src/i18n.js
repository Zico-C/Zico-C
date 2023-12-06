import i18n from "i18next";
//引入 react initReactI18next（初始化） 使用 {  } 為方法，可直接使用！
import { initReactI18next } from "react-i18next";
//引入 英文語言包
import translationEN from "./locales/en/translation.json"
//引入 中文語言包
import translationZH from "./locales/zh/translation.json"
//引入 intervalplural 插件：用於處理允許複數形式的文字。
// 默認導出不需要使用 { } ，直接導入整塊模組的默認內容
//它為不同數量的項目提供不同的翻譯，以便根據數量動態選擇正確的文字形式。
import  intervalplural  from "i18next-intervalplural-postprocessor";
//引入 languagedetector 插件：
//偵測使用者瀏覽器中的首選語言設置，並根據這些設定自動設定應用程式的語言。
import languagedetector from "i18next-browser-languagedetector";

/*
initReactI18next 是初始化 i18next 的 React 集成。
例如支持的語言、翻譯文件的路徑等等。這樣一來，
你就可以在整個應用程序中使用 i18n 函數來翻譯文本、根據用戶選擇的語言顯示不同的內容。
*/


//創建一個名為 resources 的常數物件
const resources = {
    en:{
        //translation 物件用於存儲英語版本的翻譯字串
        //屬性名稱 : 變數 (它引入了英文語言包的翻譯資源)。
        translation: translationEN,
    },
    zh:{
        //translation(翻譯):import(引入的語言包) 例如 translationZH
        translation: translationZH,
    },
};


// (use) 使用 initReactI18next 與 (use) 使用 intervalplural 與(use) (use) 使用 languagedetector
// 執行 (init)初始化 
i18n.use(initReactI18next).use(intervalplural).use(languagedetector).init({
    //引入語言物件
    resources,
    //lng:"預設語言"
    lng:"en",
    //fallbackLng = 假設 中文、英文 都讀取不到 顯示的預設什麼語言
    fallbackLng: "en"
})
