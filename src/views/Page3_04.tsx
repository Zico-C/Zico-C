import { motion } from "framer-motion";
import { Row, Col } from "antd";
import TestCard from "./Framer-Motion/TestCard";
function Page3_04() {
  return (
    <>
      <motion.div
      // // initial (初始狀態)
      // initial={{ x: "101%" }}
      // // animate (目標狀態)
      // // animate={{ x: "0" }}
      // // whileInView (當出現在螢幕中)
      // whileInView={{ x: 0 }}
      // // transition (轉場)
      // transition={{
      //   type: "tween", //    (動畫類型): tween，表示基本平滑轉場效果。
      //   delay: 0.5, //       (動畫延遲時間): 0.5，表示初始狀態等待 0.5 秒開始動畫效果。
      //   duration: 1, //      (動畫持續時間): 1，表示動畫效果在 1 秒內完成初始狀態到目標狀態的轉場效果。
      //   ease: "easeInOut", //(動畫轉場函數): easeInOut，表示緩慢加速，然後緩慢減速轉場函數，可讓動畫看起來更自然
      // }}
      // // once: true (whileInView 只執行一次，當不在螢幕中不會再回去初始狀態)
      // viewport={{ once: true }}
      >
        <Row gutter={[16, 16]}>
          {Array.from({ length: 8 }).map((_unused, i) => (
            <Col key={i} span={6}>
              <TestCard key={i} order={i} />
            </Col>
          ))}
        </Row>
      </motion.div>
      <motion.div layout />

      <div style={{ height: "70vh" }} />
      <Row gutter={[16, 16]}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Col key={i} span={6}>
            <TestCard key={i} />
          </Col>
        ))}
      </Row>
      <div style={{ height: "75vh" }} />

      <Row gutter={[16, 16]}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Col key={i} span={6}>
            <TestCard key={i} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Page3_04;
