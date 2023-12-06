import { PageTitle } from "./utils";
import styles from "../page5.module.scss";
function HsinchuHarbor() {
  return (
    <>
      <div className={styles.travel}>
        <PageTitle
          title={"新竹漁港"}
          subtitle={`
          <h3>新竹漁港（英語：Hsinchu Harbor），又稱南寮漁港，為臺灣西海岸遠洋漁業的重要港口，屬第一類漁港，位於臺灣新竹市北區、頭前溪出海口南側的南寮，西臨臺灣海峽。</h3>
          <p>新竹漁港於1731年（清雍正九年）開港，當時名為「竹塹港」，於今日的舊港一處。由於新竹漁港為中國大陸直航到臺灣最近的距離，是與中國大陸間貿易往來的第一站，在地理位置上具有優勢，而且也是福建平潭沿岸潮流，直到臺灣新竹外海再轉向的地方，北流桃園，南轉臺中。在交通上，新竹漁港距新竹火車站5公里、新竹機場1公里。附近有十七公里海岸線自行車道，可作當地休閒之處。</p>


        `}
          photo={[
            "https://cc.tvbs.com.tw/img/upload/2018/05/02/20180502181125-24f90f58.jpg",
          ]}
        />
      </div>
    </>
  );
}

export default HsinchuHarbor;
