import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Root Layout</div>
      {children}
    </>
  );
}

export default layout;
