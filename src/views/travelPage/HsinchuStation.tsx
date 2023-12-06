import { PageTitle } from "./utils";
import styles from "../page5.module.scss";
function HsinchuStation() {
  return (
    <>
      <div className={styles.travel}>
        <PageTitle
          title={"新竹火車站"}
          subtitle={`
          <h3>新竹車站位於臺灣新竹市東區。為臺灣鐵路管理局縱貫線及內灣線的鐵路車站，此外內灣線及六家線以此站為折返點。新竹車站是劉銘傳鐵路的終點。日治時期時將原有路線部分改線，並計畫向南興建縱貫鐵路，同時將新竹車站改建為木造站房。</h3>
          <p>現今站體於大正二年（1913年）完工，建築樣式結合了巴洛克風格與德式哥德風，具有陡斜的屋頂，為整個車站帶來優美典雅的異國情調，加上厚實的紅磚牆壁，讓設計繁複的建築更顯莊重，線條分明的設計點綴著細緻的裝飾。二戰後整修的樣子與原設計較不同。是臺灣最古老的現役站房，為國定古蹟。目前正在進行新竹大車站平台計畫的綜合規劃中。</p>
        `}
          photo={[
            "https://www.tdri.org.tw/wp-content/uploads/2020/10/ZAH_9082.jpg",
            "https://www.tdri.org.tw/wp-content/uploads/2021/04/2000px_2C5A1734-1024x683.jpg",
          ]}
        />
      </div>
    </>
  );
}

export default HsinchuStation;
