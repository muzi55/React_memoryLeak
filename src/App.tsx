import React, { useState, useEffect } from "react";

function App() {
  const [clientXY, setClientXY] = useState<number[]>([0, 0]);

  const handleMouseMove = (e: MouseEvent) => {
    setClientXY([e.clientX, e.clientY]);
    console.log([e.clientX, e.clientY]);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => {
      alert("타이머");
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <h2>홈</h2>
      <p>홈 페이지입니다.</p>
      <p>마우스 X, Y 좌표 {`${clientXY[0]}, ${clientXY[1]}`}</p>

      <button> 3초뒤 알럿창</button>
    </>
  );
}

export default App;
