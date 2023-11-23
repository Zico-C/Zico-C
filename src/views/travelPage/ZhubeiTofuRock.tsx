import { PageTitle } from "./utils";
import styles from "../page5.module.scss";
function ZhubeiTofuRock() {
  return (
    <>
      <div className={styles.travel}>
        <PageTitle
          title={"頭前溪豆腐岩"}
          subtitle={`
          <h3>位在新竹頭前溪豆腐岩是為了保護河床鎖設置的消波塊，因其方正的外型排列整齊的樣貌在溪河之中就像是豆腐湯般而得名，也因每塊岩塊的空隙較大，民眾在上面行走需用跨跳方式，宛如鋼琴上的小精靈，而聲名大噪，吸引許多人前來此處拍照取景。</h3>
          <p>【大眾運輸】
          可搭乘火車前往六家車站後轉乘計程車抵達此處。</p>


        `}
          photo={[
            "https://www.treatrip.com/wp-content/uploads/photobeauty_-tofurock_cover-2.jpg",
          ]}
        />
      </div>
    </>
  );
}

export default ZhubeiTofuRock;
