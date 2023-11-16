import { PageTitle } from "./utils";
import styles from "../page5.module.scss";
function HsinchuZoo() {
  return (
    <>
      <div className={styles.travel}>
        <PageTitle
          title={"新竹市立動物園"}
          subtitle={`
          <h3>新竹市立動物園（英語：Hsinchu Zoo）是位於臺灣新竹市東區的一座公立動物園，於1936年創立，是目前臺灣原址現存最老的動物園，面積約2.7公頃，其舊大門、噴水池和黃魚鴞欄舍仍為最初興建時的樣貌，園內包含6個展示區。</h3>
          <p>自2017年5月29日開始休園進行「新竹動物園再生計畫」，打造友善動物的棲地式動物園，2019年12月28日重新開園</p>
        `}
          photo={[
            "https://zoo-info.hccg.gov.tw/wp-content/uploads/2023/07/MAP.png",
          ]}
        />
      </div>
    </>
  );
}

export default HsinchuZoo;
