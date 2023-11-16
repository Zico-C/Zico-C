import { PageTitle } from "./utils";
import styles from "../page5.module.scss";
function BigCity() {
  return (
    <>
      <div className={styles.travel}>
        <PageTitle
          title={"遠東巨城購物中心"}
          subtitle={`
          <h3>Big City遠東巨城購物中心，是一座位於臺灣新竹市東區的大型購物中心，2012年4月28日開業，其前身為2003年開業的風城購物中心。</h3>
          <p>基地面積11,920坪，建築總樓板面積為102,376坪，商場樓地板面積為72,500坪，為新竹市及北台灣最大購物中心，營運三年半即達成百億業績，2022年營業額為142億元，最高紀錄為台灣前6大營業額百貨購物中心，2023營業額預估達158億元。商場設有免費接駁車路線往返台鐵新竹車站。</p>
        `}
          photo={[
            "https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/256119088_4574421482640096_3343689350430569008_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ovUp-Gb36-0AX-Ys9xR&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAZaNOjdHUEVQ9HYH_mFjOxTXO-XiEhTFjIBKox30nH5w&oe=655B10EE",
            "https://images.abic.com.tw/photoDB/post/1590390950.jpg",
          ]}
        />
      </div>
    </>
  );
}

export default BigCity;
