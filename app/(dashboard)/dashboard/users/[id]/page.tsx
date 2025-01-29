import React from "react";

async function page({ params }: { params: { id: string } }) {
  return <div>Hello User {params?.id}</div>;
}

export default page;
