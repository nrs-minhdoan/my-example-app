import React, { useEffect } from "react";

function NoMemoExample({ type = "global key" }: { type?: string } = {}) {
  useEffect(() => {
    console.log("=== effect no memo child === ", type);
  }, [type]);

  console.log("=== render no memo child === ", type);

  return <div>No Memo Component</div>;
}

export default NoMemoExample;
