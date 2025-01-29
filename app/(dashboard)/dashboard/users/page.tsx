import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <h1> Dashboard USers</h1>
      <ul className="mt-10">
        <li>
          <Link href="users/1">users 1</Link>
        </li>
        <li>
          <Link href="users/2">users 2</Link>
        </li>
        <li>
          <Link href="users/3">users 3</Link>
        </li>
        <li>
          <Link href="users/4">users 4</Link>
        </li>
      </ul>
    </>
  );
}

export default page;
