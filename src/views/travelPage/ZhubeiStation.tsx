import { PageTitle } from "./utils";
import styles from "../page5.module.scss";
function ZhubeiStation() {
  return (
    <>
      <div className={styles.travel}>
        <PageTitle
          title={"竹北後火車站"}
          subtitle={`
          <h3>竹北車站位於台灣新竹縣竹北市，為臺灣鐵路管理局縱貫線的鐵道車站，第1月台原為岸式月台，在改建為跨站式站房的同時改為現行的島式月台。因應第1月台改為島式月台可供逆行列車待避，故原為袋狀軌配置的2A月台改為僅順行列車可安排待避。</h3>
          <p>1897年（明治30年）9月10日，增設紅毛田假停車場。</p>
          <p>1902年6月1日，改為紅毛田停車場。</p>
          <p>1920年10月1日，更改為紅毛驛。</p>
          <p>1934年11月1日，更改為竹北驛（日語：竹北驛／ちくほくえき）</p>
          <p>2010年3月26日，本站可使用台灣通搭乘瑞芳 - 新竹間的29個站（不含暖暖），並接受台灣通加值服務。</p>
          <p>2011年1月1日，因應台鐵多卡通驗票閘門啟用，本站開放使用悠遊卡，搭乘區間與台灣通相同，並接受悠遊卡加值服務。</p>
          <p>2013年7月17日，跨站式新站房啟用，此站房為綠建築設計。原舊站房之後改為「Dumpling 水餃 Station」 的餐館。</p>

        `}
          photo={[
            "https://upload.wikimedia.org/wikipedia/commons/9/91/TRA_Zhubei_Station%281%29%2C_July%2C_2013.JPG",
          ]}
        />
      </div>
    </>
  );
}

export default ZhubeiStation;
