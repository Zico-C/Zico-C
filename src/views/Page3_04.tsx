import { Tooltip, Row, Col, Divider, Button, Typography } from "antd";
import styles from "./page3_04.module.scss";

const { Title } = Typography;

const ports = [
  { index: 1, name: "Ethernet1", status: "up" },
  { index: 2, name: "Ethernet2", status: "up" },
  { index: 3, name: "Ethernet3", status: "up" },
  { index: 4, name: "Ethernet4", status: "down" },
  { index: 5, name: "Ethernet5", status: "up" },
  { index: 6, name: "Ethernet6", status: "up" },
  { index: 7, name: "Ethernet7", status: "up" },
  { index: 8, name: "Ethernet8", status: "down" },
  { index: 9, name: "Ethernet9", status: "up" },
  { index: 10, name: "Ethernet10", status: "up" },
  { index: 11, name: "Ethernet11", status: "down" },
  { index: 12, name: "Ethernet12", status: "up" },
];

// 分成兩區塊：前 1-8 為 LAN，後面為 UPLINK
const lanPorts = ports.filter((p) => p.index <= 8);
const uplinkPorts = ports.filter((p) => p.index > 8);

// 區塊內上下分開
const groupPorts = (arr: typeof ports) => ({
  top: arr.filter((p) => p.index % 2 === 0),
  bottom: arr.filter((p) => p.index % 2 === 1),
});

const renderPortBlock = (port: any, labelBelow = false) => (
  <div className={styles.port_block}>
    <Button
      onClick={(port) => console.log("port", port)}
      type="text"
      className={styles.port_Button}
    >
      {!labelBelow && (
        <div className={styles.port_labelAbove}>{port.index}</div>
      )}
      <Tooltip
        title={
          <div>
            <div>埠：{port.index}</div>
            <div>ifName：{port.name}</div>
            <div>狀態：{port.status === "up" ? "Up" : "Down"}</div>
            <div>MAC 位址：-</div>
            <div>IP 位址：-</div>
          </div>
        }
        placement={labelBelow ? "top" : "bottom"}
      >
        <div
          className={`${styles.port_square} ${
            port.status === "up" ? styles.active : styles.inactive
          }`}
        />
      </Tooltip>
      {labelBelow && <div className={styles.port_labelBelow}>{port.index}</div>}
    </Button>
  </div>
);

export default function Page3_04() {
  const lan = groupPorts(lanPorts);
  const uplink = groupPorts(uplinkPorts);

  return (
    <div className={styles.panel}>
      <Row
        gutter={64}
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* LAN 區塊 */}
        <Col span={18}>
          <Title level={3}>TEST</Title>
        </Col>
        <Col span={6}>
          <Title level={3}>TEST</Title>
        </Col>
        <Col>
          <Row gutter={32} justify={"center"}>
            {lan.top.map((p) => (
              <Col key={p.index}>{renderPortBlock(p)}</Col>
            ))}
          </Row>
          <Row gutter={32} style={{ marginTop: 8 }} justify={"center"}>
            {lan.bottom.map((p) => (
              <Col key={p.index}>{renderPortBlock(p, true)}</Col>
            ))}
          </Row>
          <Row justify="center" style={{ marginTop: 8 }}>
            <div className={styles.label_lan}>
              <Divider>LAN</Divider>
            </div>
          </Row>
        </Col>

        {/* UPLINK 區塊 */}
        <Col>
          <Row gutter={32} justify={"center"}>
            {uplink.top.map((p) => (
              <Col key={p.index}>{renderPortBlock(p)}</Col>
            ))}
          </Row>
          <Row gutter={32} style={{ marginTop: 8 }} justify={"center"}>
            {uplink.bottom.map((p) => (
              <Col key={p.index}>{renderPortBlock(p, true)}</Col>
            ))}
          </Row>
          <Row justify="center" style={{ marginTop: 8 }}>
            <div className={styles.label_uplink}>
              <Divider>UPLINK</Divider>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
