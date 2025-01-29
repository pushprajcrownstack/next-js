import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Dasboard Layout</div>
      {children}
    </>
  );
}

export default layout;
