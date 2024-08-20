import React, { memo, useEffect } from "react";

function MemoExample({ type = "global key" }: { type?: string } = {}) {
  useEffect(() => {
    console.log("=== effect memo child === ", type);
  }, [type]);

  console.log("=== render memo child === ", type);

  return <div>Memo Component</div>;
}

export default memo(MemoExample);
