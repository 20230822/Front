import React from "react";
import { useEffect, useState } from "react";

function Light({ selectedItem, lightMethod, lightColor }) {
  useEffect(() => {
    // props 중 하나라도 변경되면 해당 내용을 콘솔에 출력
    console.log("selectedItem:", selectedItem);
    console.log("lightMethod:", lightMethod);
    console.log("lightColor:", lightColor);
  }, [selectedItem, lightMethod, lightColor]);

  return (
    <div className="light">
      조명: {selectedItem} <br />
      조명 방식: {lightMethod} <br />
      조명색: {lightColor}
    </div>
  );
}

export default Light;
