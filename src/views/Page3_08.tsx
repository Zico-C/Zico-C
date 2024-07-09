import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useEffect, useState } from "react";

function Page3_08() {
  var document: any = window.document;
  const [onIpcamera, setOnIpcamera] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [originResizeFunc, setOriginResizeFunc] = useState<any>(null);
  function requestFullScreen(element: any) {
    var requestMethod =
      element.requestFullscreen ||
      element.webkitRequestFullscreen ||
      element.msRequestFullscreen ||
      element.mozRequestFullScreen;
    if (requestMethod) {
      requestMethod.call(element);
    }
  }
  function exitFullScreen() {
    var exitMethod =
      document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.msExitFullscreen ||
      document.mozCancelFullScreen;
    if (exitMethod) {
      exitMethod.call(document);
    }
  }
  function isFullscreenElement() {
    var isFull =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement ||
      document.mozFullScreenElement;
    return !!isFull;
  }

  useEffect(() => {
    // 监听 键盘ESC 退出全屏(可以使用屏幕大小监听，触发对应的事件)
    if (window.addEventListener) {
      window.addEventListener("resize", onEscCancelFull, false);
    } else {
      setOriginResizeFunc(window.onresize);
      window.onresize = onEscCancelFull;
    }
    // 销毁清除事件
    return () => {
      if (window.removeEventListener) {
        window.removeEventListener("resize", onEscCancelFull, false);
      } else {
        window.onresize = originResizeFunc;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function onEscCancelFull() {
    // 用于反显状态
    setFullScreen(isFullscreenElement());
  }
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div>
      Page3_08
      {fullScreen ? (
        <FullscreenExitOutlined
          onClick={() => {
            exitFullScreen();
          }}
          style={{ fontSize: "24px", marginRight: "10px" }}
        />
      ) : (
        <FullscreenOutlined
          onClick={() => {
            requestFullScreen(document.body);
          }}
          style={{ fontSize: "24px", marginRight: "10px" }}
        />
      )}
      <p>123</p>
      <p>123</p>
      <p>123</p>
      {onIpcamera ? (
        <Popover content={content} title="監視器分屏模式" trigger="hover">
          <Button
            style={{ height: "50px", width: "auto" }}
            onClick={() => {
              setOnIpcamera(!onIpcamera);
            }}
          >
            {onIpcamera ? (
              <VideoCameraOutlined
                style={{ color: "blue", fontSize: "20px", width: "50px" }}
              />
            ) : (
              <VideoCameraOutlined
                style={{
                  color: "gray",
                  fontSize: "20px",
                  width: "50px",
                }}
              />
            )}
          </Button>
        </Popover>
      ) : (
        <Button
          style={{ height: "50px", width: "auto" }}
          onClick={() => {
            setOnIpcamera(!onIpcamera);
          }}
        >
          {onIpcamera ? (
            <VideoCameraOutlined
              style={{ color: "blue", fontSize: "20px", width: "50px" }}
            />
          ) : (
            <VideoCameraOutlined
              style={{
                color: "gray",
                fontSize: "20px",
                width: "50px",
              }}
            />
          )}
        </Button>
      )}
    </div>
  );
}

export default Page3_08;
