import { PageTitle } from "./utils";
import styles from "../page5.module.scss";
function HsinchuTemple() {
  return (
    <>
      <div className={styles.travel}>
        <PageTitle
          title={"新竹都城隍廟"}
          subtitle={`
          <h3>新竹都城隍廟與法蓮寺，是位於臺灣新竹市北區中山里的城隍廟，廟身列為市定古蹟，主神為城隍信仰的都城隍爺。</h3>
          <p>清高宗乾隆十二年（1747年），淡水同知曾日瑛上表朝廷，並飭地方宦紳集資於翌年（1748年）建成作為官廟的城隍廟。其廟地為墾戶王世傑所獻，王世傑並捐出出租北門大街店屋之所得以維持廟務，目前廟中仍供奉其長生祿位。乾隆時的竹塹城地圖，城內就標明此廟與新竹內天后宮這兩座廟宇。</p>
        `}
          photo={[
            "https://upload.wikimedia.org/wikipedia/commons/5/57/COVID-19%E6%9C%9F%E9%96%93%E7%9A%84%E6%96%B0%E7%AB%B9%E9%83%BD%E5%9F%8E%E9%9A%8D%E5%BB%9F.jpg",
            "https://photo.settour.com.tw/900x600/https://www.settour.com.tw/ss_img/info/location/HSZ/Z0/HSZ0000090/HSZ0000090_93151.jpg",
          ]}
        />
      </div>
    </>
  );
}

export default HsinchuTemple;
