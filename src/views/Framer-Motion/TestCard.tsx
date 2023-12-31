import { motion, useAnimation } from "framer-motion";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

const TestCard = ({ order }: any) => {
  const screens = useBreakpoint();

  const delay = order >= 4 ? (8 - order - 1) * 0.3 : order * 0.3;
  // 定義淡入的功能
  const fadeIn = () => {
    const x = order >= 4 ? 100 : -100;
    return {
      // hidden 隱藏的時候
      hidden: {
        opacity: 0,
        x,
      },
      // visible 可見的時候
      visible: {
        opacity: 1,
        x: 0,
      },
    };
  };
  const controls = useAnimation();
  const handleHoverStart = () => {
    controls.start({ scale: 1.1, transition: { delay: 0 } });
  };
  const handleHoverEnd = () => {
    controls.start({ scale: 1, transition: { delay: 0 } });
  };

  console.log(order, delay);

  return (
    <motion.div
      // 設定卡片樣式
      style={{
        minWidth: screens.xs ? "60px" : screens.sm ? "80px" : "300px",
        height: screens.xs ? "100px" : screens.sm ? "200px" : "250px",
        padding: "10px",
        borderRadius: "0.5rem",
        background: "gray",
        color: "white",
      }}
      // 初始狀態為 hidden 來自於fadeIn 定義的物件名稱。
      initial="hidden"
      // 當進入視圖時觸發動畫效果為 visible 來自於fadeIn 定義的物件名稱。
      whileInView="visible"
      // variants 允許可以透過切換單一元件來控制整個元件樹的動畫，可以編排當子動畫相對於其父動畫播放時。
      variants={fadeIn()}
      transition={{ type: "tween", delay }}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      // viewport={{ once: true }}
    >
      <h2 style={{ fontSize: "1.2rem" }}>Card</h2>
      <br />
      {screens.xs ? (
        <p>Framer-Motion</p>
      ) : (
        <p style={{ fontSize: "1rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at,
          perferendis doloremque adipisci nostrum recusandae, fuga quis nulla
          tempora voluptas rerum officia labore beatae voluptatum dolorum
          pariatur atque possimus quo.
        </p>
      )}
    </motion.div>
  );
};

export default TestCard;
