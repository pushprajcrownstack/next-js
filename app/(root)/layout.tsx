import React from "react";
import Header from "../../components/Header";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </ main>
  );
}

export default layout;
