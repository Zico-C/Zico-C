import { useState, useEffect } from "react";

function View() {
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVarA((prev) => prev + 1), 1000);

    return () => clearTimeout(timeout);
  }, [varA]);

  useEffect(() => {
    const timeout = setTimeout(() => setVarB((prev) => prev + 2), 2000);

    return () => clearTimeout(timeout);
  }, [varB]);

  return (
    <div className="Home">
      <h1>這是page4_02的頁面</h1>
      <p>VarA ：{varA}</p>
      <p>VarB ：{varB}</p>
    </div>
  );
}

export default View;
