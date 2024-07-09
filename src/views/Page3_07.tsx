import React, { useState } from "react";
import { Tree } from "antd";
import type { TreeDataNode } from "antd";
import photo from "../../public/vite.svg";
const treeData: TreeDataNode[] = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          { title: "0-0-0-0", key: "0-0-0-0" },
          { title: "0-0-0-1", key: "0-0-0-1" },
          { title: "0-0-0-2", key: "0-0-0-2" },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      { title: "0-1-0-0", key: "0-1-0-0" },
      { title: "0-1-0-1", key: "0-1-0-1" },
      { title: "0-1-0-2", key: "0-1-0-2" },
    ],
  },
  {
    title: "0-2",
    key: "0-2",
  },
];

const Page3_07 = () => {
  return (
    <>
      <div style={{ marginTop: "25px", width: "100%", height: "100%" }}>
        <Tree
          checkable
          treeData={treeData}
          showLine
          style={{
            backgroundColor: "#333",
            color: "#fff",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div
        style={{
          marginTop: "25px",
          backgroundColor: "green",
          width: "50%",
          height: "50%",
        }}
      >
        <img src={photo} alt="" width={"100%"} height={"100%"} />
      </div>
    </>
  );
};

export default Page3_07;
