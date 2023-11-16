import { PageTitle } from "./utils";
import styles from "../page5.module.scss";
function HsinchuPark() {
  return (
    <>
      <div className={styles.travel}>
        <PageTitle
          title={"新竹公園"}
          subtitle={`
          <h3>新竹公園是位於新竹市東區佔地約13公頃的公園，地處名為「枕頭山」的山丘。枕頭山一帶在日治時期被改建為公園，於1925年完工開放，是目前新竹市內最大的公園，而新竹公園內的新竹動物園設有「枕頭山登頂紀念牌」作為紀念。</h3>
          <p>2017年8月9日，新竹公園與其週邊設施進行再生工程，於2018年9月29日完工啟用。其餘部分設施如新竹市田徑場於2020年9月17日改建完畢，孔廟廣場於2020年9月30日隨著2020台灣設計展開幕而啟用。</p>
        `}
          photo={[
            "https://cpok.tw/wp-content/uploads/2023/02/unnamed-file-26.png",
          ]}
        />
      </div>
    </>
  );
}

export default HsinchuPark;
