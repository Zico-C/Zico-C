import React from "react";
import { Grid, Tag } from "antd";

const { useBreakpoint } = Grid;

const App: React.FC = () => {
  const screens = useBreakpoint();
  console.log("screens", screens);

  const Print = Object.entries(screens);
  console.log("Print", Print);

  return (
    <>
      <div style={{ margin: "0", padding: "0" }}>
        {/* Current break point:{" "}
        {Object.entries(screens)
          .filter((screen) => !!screen[1])
          .map((screen) => (
            <Tag color="blue" key={screen[0]}>
              {screen[0]}
            </Tag>
          ))} */}
        {/* 較簡單的寫法，效果一樣 */}
        <hr style={{ marginLeft: "0", width: "305px" }} />
        Current break point:{" "}
        {Object.keys(screens).map(
          (screen) =>
            screens[screen] && (
              <Tag color="blue" key={screen}>
                {screen}
              </Tag>
            )
        )}
      </div>
    </>
  );
};

export default App;
