// 引入 React 和 react-dom
import { useState } from "react";

// 引入 react-grid-layout
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
// 定义网格布局的元素
const items = [
  { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: "c", x: 4, y: 0, w: 1, h: 2 },
];

// 定义响应式布局
const layout = {
  lg: [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ],
};

// 定义响应式布局的断点
const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };

// 定义响应式布局的栅格数
const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

function Page4_04() {
  // 定义 state
  const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
  const [compactType, setCompactType] = useState("vertical");
  const [layouts, setLayouts] = useState(layout);

  // 定义事件处理函数
  function onBreakpointChange(breakpoint: any) {
    setCurrentBreakpoint(breakpoint);
  }

  function onLayoutChange(layout: any) {
    setLayouts(layout);
  }

  return (
    <div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={breakpoints}
        cols={cols}
        rowHeight={30}
        onBreakpointChange={onBreakpointChange}
        onLayoutChange={onLayoutChange}
      >
        {items.map((item) => (
          <div
            key={item.i}
            className="item"
            style={{ backgroundColor: "orange" }}
          >
            {item.i}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
export default Page4_04;
