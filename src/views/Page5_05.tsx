import { Card, Form, Input, Button } from "antd";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styles from "./page5.module.scss";
import { useForm } from "antd/es/form/Form";

interface Markers {
  id: number;
  position: [number, number];
  name: string;
  type: string;
  officialWeb?: string;
  googleMap?: string;
  icon?: string;
}
function Page5_05() {
  const FetchAPI = async () => {
    try {
      const res = await fetch("http://localhost:3003/markers");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  const createAPI = async ({
    id,
    position,
    name,
    type,
    officialWeb,
    googleMap,
    icon,
  }: Markers) => {
    try {
      const res = await fetch("http://localhost:3003/markers", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id,
          position,
          name,
          type,
          officialWeb,
          googleMap,
          icon,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  const [inputPosition, setInputPosition] = useState<string>("");
  const [inputLocation, setInputLocation] = useState("");
  const [inputType, setInputType] = useState("");
  const [inputOfficialWeb, setInputOfficialWeb] = useState("");
  const [inputGoogleMap, setInputGoogleMap] = useState("");
  const [inputIcon, setInputIcon] = useState("");
  const [form] = useForm();

  const { data, isSuccess } = useQuery(["mapMarkers"], FetchAPI);
  const queryClient = useQueryClient();

  const createPostMutation = useMutation(createAPI, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("mapMarkers");
      console.log("創建Post成功", data);
    },
    onError: (error) => {
      console.log("創建Post失敗", error);
    },
  });

  const handleFormSubmit = () => {
    try {
      // 在這裡將 inputPosition 字串轉換為數字陣列
      const positionArray: [number, number] = inputPosition
        .split(",")
        .map((str) => parseFloat(str.trim())) as [number, number];
      createPostMutation.mutate({
        id: 0,
        position: positionArray,
        name: inputLocation,
        type: inputType,
        officialWeb: inputOfficialWeb,
        googleMap: inputGoogleMap,
        icon: inputIcon,
      });

      // 清空表單值
      setInputPosition("");
      setInputLocation("");
      setInputType("");
      setInputOfficialWeb("");
      setInputGoogleMap("");
      setInputIcon("");
      // 清空表單內容
      form.resetFields();
      console.log("inputPosition", inputPosition);
      console.log("inputLocation", inputLocation);
      console.log("inputType", inputType);
      console.log("inputOfficialWeb", inputOfficialWeb);
      console.log("inputGoogleMap", inputGoogleMap);
      console.log("inputIcon", inputIcon);
    } catch (error) {
      console.error("解析 JSON 時發生錯誤:", error);
    }
  };
  return (
    <>
      <Card className={styles.APImain}>
        <h1>Post Markers Data</h1>
        <Form
          onFinish={handleFormSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          form={form}
        >
          <Form.Item
            label={
              <label style={{ color: "#fff", fontSize: "1.3rem" }}>
                Position
              </label>
            }
            name="Position"
            rules={[
              {
                required: true,
                message: "請輸入正確的 座標格式 number,number",
                pattern: /^-?\d+(\.\d+)?,\s?-?\d+(\.\d+)?$/,
              },
            ]}
          >
            <Input
              autoComplete="off"
              value={inputPosition}
              onChange={(e) => setInputPosition(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={
              <label style={{ color: "#fff", fontSize: "1.3rem" }}>
                Location
              </label>
            }
            name="Location"
            rules={[
              {
                required: true,
                message: "請輸入名稱或地名",
              },
            ]}
          >
            <Input
              autoComplete="off"
              value={inputLocation}
              onChange={(e) => setInputLocation(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={
              <label style={{ color: "#fff", fontSize: "1.3rem" }}>Type</label>
            }
            name="Type"
            rules={[
              {
                required: true,
                message: "請輸入類型 (ex:美食 | 景點 | 大眾交通工具)",
                pattern: /^(景點|美食|大眾交通工具)$/,
              },
            ]}
          >
            <Input
              autoComplete="off"
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={
              <label style={{ color: "#fff", fontSize: "1.3rem" }}>
                OfficialWeb
              </label>
            }
            name="OfficialWeb"
            rules={[
              {
                required: false,
                message: "請輸入官方網站URL",
                pattern: /^(https?):\/\/[^\s/$.?#].[^\s]*$/,
              },
            ]}
          >
            <Input
              autoComplete="off"
              value={inputOfficialWeb}
              onChange={(e) => setInputOfficialWeb(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={
              <label style={{ color: "#fff", fontSize: "1.3rem" }}>
                GoogleMap
              </label>
            }
            name="GoogleMap"
            rules={[
              {
                required: false,
                message: "請輸入 GoogleMap URL",
                pattern: /^(https?):\/\/[^\s/$.?#].[^\s]*$/,
              },
            ]}
          >
            <Input
              autoComplete="off"
              value={inputGoogleMap}
              onChange={(e) => setInputGoogleMap(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={
              <label style={{ color: "#fff", fontSize: "1.3rem" }}>Icon</label>
            }
            name="Icon"
            rules={[
              {
                required: false,
                message: "請輸入 照片檔案 URL",
                pattern: /^(https?):\/\/[^\s/$.?#].[^\s]*$/,
              },
            ]}
          >
            <Input
              autoComplete="off"
              value={inputIcon}
              onChange={(e) => setInputIcon(e.target.value)}
            />
          </Form.Item>{" "}
          <Form.Item
            wrapperCol={{ offset: 4, span: 16 }}
            className={styles.Postbutton}
          >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
        <div>
          {isSuccess && <hr style={{ width: "90%", marginBottom: "2rem" }} />}
          {isSuccess &&
            data?.map((markers: Markers) => (
              <div key={markers.id} className={styles.card5_5}>
                <p>
                  <span>id：</span>
                  {markers.id}
                </p>
                <p>
                  <span>position：</span>
                  {markers.position[0] + "," + markers.position[1]}
                </p>
                <p>
                  <span>name：</span>
                  {markers.name}
                </p>
                <p>
                  <span>type：</span>
                  {markers.type}
                </p>
                <p
                  style={
                    markers.officialWeb == null
                      ? { display: "none" }
                      : undefined
                  }
                >
                  <span>officialWeb：</span>
                  {markers.officialWeb}
                </p>
                <p
                  style={
                    markers.googleMap == null ? { display: "none" } : undefined
                  }
                >
                  <span>googleMap：</span>
                  {markers.googleMap}
                </p>
                <p
                  style={markers.icon == null ? { display: "none" } : undefined}
                >
                  <span>icon：</span>
                  {markers.icon}
                </p>
              </div>
            ))}
        </div>
      </Card>
    </>
  );
}

export default Page5_05;
