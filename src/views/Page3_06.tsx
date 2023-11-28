import type { RadioChangeEvent } from "antd";
import { useState } from "react";
import { Radio, Form, Button, message } from "antd";
function Page3_06() {
  const [messageApi, contextHolder] = message.useMessage();

  const [textFirst, setTextFirst] = useState("");
  const [textSecond, setTextSecond] = useState("");

  const handleClick = (e: RadioChangeEvent) => {
    console.log("按鈕值為：", e.target.value);
    setTextFirst(e.target.value);
  };
  const handleClick2 = (e: RadioChangeEvent) => {
    console.log("按鈕值為：", e.target.value);
    setTextSecond(e.target.value);
  };
  const onFinish = (values: any) => {
    // 這裡取值為 FForm.Item 的 label
    const radioFirstalue = values.RadioFirst;
    const radioSecondValue = values.RadioSecond;
    messageApi.info(
      "你點擊的按鈕為：" + radioFirstalue + " , " + radioSecondValue
    );
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
        {textFirst && textSecond ? (
          <p>
            選擇的是 ：{textFirst} , {textSecond}
          </p>
        ) : textFirst || textSecond ? (
          <p>選擇的是 ：{textFirst || textSecond}</p>
        ) : null}

        <Button type="primary" htmlType="submit" style={{ margin: "2rem 0" }}>
          送出表單
        </Button>
        {contextHolder}
      </Form>
      <br />
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
