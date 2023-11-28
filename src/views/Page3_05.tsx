import { useMemo, useState } from "react";
import { Card, Typography, Radio } from "antd";
import { HighlightOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;

function Page3_05() {
  const [text, setText] = useState("This is an editable text.");
  const [clickTriggerStr, setClickTriggerStr] = useState(
    "Text or icon as trigger - click to start editing."
  );
  const [chooseTrigger, setChooseTrigger] = useState<("icon" | "text")[]>([
    "icon",
  ]);
  const radioToState = (input: string): ("icon" | "text")[] => {
    switch (input) {
      case "text":
        return ["text"];
      case "both":
        return ["icon", "text"];
      case "icon":
      default:
        return ["icon"];
    }
  };

  const stateToRadio = useMemo<string>(() => {
    if (chooseTrigger.includes("text")) {
      return chooseTrigger.includes("icon") ? "both" : "text";
    }
    return "icon";
  }, [chooseTrigger]);

  return (
    <>
      <Card>
        <h1
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "darkblue",
          }}
        >
          點擊 icon 編輯文字
        </h1>
        <Paragraph
          editable={{ onChange: setText, icon: <HighlightOutlined /> }}
          style={{ fontSize: "20px", fontWeight: 500 }}
        >
          {text}
        </Paragraph>
        <h1
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "darkblue",
          }}
        >
          點擊 Radio 改變編輯文字方式 ： pick icon = 點擊 icon | pick text =
          點擊文字 | both = 兩者皆顯示
        </h1>
        <span style={{ fontSize: "15px" }}>點擊按鈕改變編輯方式：</span>
        <Radio.Group
          onChange={(e) => setChooseTrigger(radioToState(e.target.value))}
          value={stateToRadio}
        >
          <Radio value={"icon"}>icon</Radio>
          <Radio value={"text"}>text</Radio>
          <Radio value={"both"}>both</Radio>
        </Radio.Group>
        <Paragraph
          editable={{
            tooltip: "click to edit text",
            onChange: setClickTriggerStr,
            triggerType: chooseTrigger,
            autoSize: true,
          }}
          style={{ fontSize: "20px", fontWeight: 500, marginTop: "20px" }}
        >
          {clickTriggerStr}
        </Paragraph>
        <Typography.Title style={{ margin: 0 }} editable>
          h1. Ant Design
        </Typography.Title>
      </Card>
    </>
  );
}

export default Page3_05;
