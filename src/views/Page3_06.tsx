import type { RadioChangeEvent } from "antd";
import { useState } from "react";
import {
  Radio,
  Form,
  Button,
  Slider,
  Rate,
  DatePicker,
  Modal,
  message,
} from "antd";

function Page3_06() {
  const [visible, setVisible] = useState(false);
  const [textFirst, setTextFirst] = useState("");
  const [textSecond, setTextSecond] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const { RangePicker } = DatePicker;
  const [formData, setFormData] = useState({
    radioFirstValue: "",
    radioSecondValue: "",
    radioRate: 0,
    radioSlider: 0,
    radioDateFirst: null,
    radioDateSecond: null,
  });
  const handleClick = (e: RadioChangeEvent) => {
    console.log("按鈕值為：", e.target.value);
    setTextFirst(e.target.value);
  };
  const handleClick2 = (e: RadioChangeEvent) => {
    console.log("按鈕值為：", e.target.value);
    setTextSecond(e.target.value);
  };
  const onFinish = (values: any) => {
    // 這裡取值為 Form.Item 的 label
    const radioDateFirst = values.RangePicker[0].format("YYYY-MM-DD"); // 出發日期
    const radioDateSecond = values.RangePicker[1].format("YYYY-MM-DD"); // 返回日期
    // 顯示 Modal
    setFormData({
      ...formData,
      radioFirstValue: values.RadioFirst,
      radioSecondValue: values.RadioSecond,
      radioRate: values.Rate,
      radioSlider: values.Slider,
      radioDateFirst,
      radioDateSecond,
    });
    setVisible(!visible); // 切換 visible 狀態
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleOK = () => {
    // 點選後 載入視覺效果 開啟
    setConfirmLoading(true);
    // 進入計時器 設定 載入視覺效果開啟 兩秒後執行下面這些
    setTimeout(() => {
      // 1.關閉 Modal 表單
      setVisible(false);
      // 2.關閉 載入視覺效果
      setConfirmLoading(false);
      // 3.全局提醒 表示 成功送出表單
      messageApi.success("成功送出表單");
    }, 2000);
  };
  return (
    <div>
      <Form
        name="basicRadio"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ fontSize: "1.2rem", fontWeight: "500" }}
      >
        <Form.Item
          label="RadioFirst"
          name="RadioFirst"
          rules={[{ required: true, message: "請選擇一個選項" }]}
        >
          <Radio.Group value={textFirst} onChange={handleClick}>
            <Radio value={"Hank"}>Hank</Radio>
            <Radio value={"Zico"}>Zico</Radio>
            <Radio value={"Chen"}>Chen</Radio>
            <Radio value={"Chi"}>Chi</Radio>
            <Radio value={"Kevin"}>Kevin</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="RadioSecond"
          name="RadioSecond"
          rules={[{ required: true, message: "請選擇一個選項" }]}
        >
          <Radio.Group value={textSecond} onChange={handleClick2}>
            <Radio value={"在吃飯"}>在吃飯</Radio>
            <Radio value={"在上班"}>在上班</Radio>
            <Radio value={"在睡覺"}>在睡覺</Radio>
            <Radio value={"在看電視"}>在看電視</Radio>
            <Radio value={"在學習"}>在學習</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Slider"
          name="Slider"
          rules={[{ required: true, message: "請評分" }]}
        >
          <Slider
            marks={{
              0: "A",
              20: "B",
              40: "C",
              60: "D",
              80: "E",
              100: "F",
            }}
            style={{ width: "50%" }}
          />
        </Form.Item>
        <Form.Item
          label="Rate"
          name="Rate"
          rules={[{ required: true, message: "請選擇一個選項" }]}
        >
          <Rate allowHalf />
        </Form.Item>
        <Form.Item
          label="RangePicker"
          name="RangePicker"
          rules={[{ required: true, message: "請選擇一個選項" }]}
        >
          <RangePicker />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ margin: "2rem 0" }}>
          送出表單
        </Button>
      </Form>
      <Modal
        title="送出的表單內容"
        open={visible}
        onOk={handleOK}
        onCancel={() => setVisible(false)}
        confirmLoading={confirmLoading}
      >
        <p>
          {formData.radioFirstValue} 正在 {formData.radioSecondValue}
        </p>
        <p>這部電影 給予 {formData.radioSlider} 分</p>
        <p>這部電影 給予 {formData.radioRate} 顆星</p>
        <p>
          出發日期 {formData.radioDateFirst} ～ 回程日期{" "}
          {formData.radioDateSecond}
        </p>
      </Modal>
      {textFirst && textSecond ? (
        <p>
          選擇的是 ：{textFirst} , {textSecond}
        </p>
      ) : textFirst || textSecond ? (
        <p>選擇的是 ：{textFirst || textSecond}</p>
      ) : null}
      <br />
      {contextHolder}
      <Input
        render={(name: any) => (
          <>
            <ReadName name={name} />
            <Greet name={name} />
          </>
        )}
      />
    </div>
  );
}
const Input = (props: any) => {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {props.render(name)}
    </>
  );
};

const ReadName = ({ name }: any) => {
  return <h1>{name}</h1>;
};

const Greet = ({ name }: any) => {
  return <h1>Hello {name}</h1>;
};
export default Page3_06;
