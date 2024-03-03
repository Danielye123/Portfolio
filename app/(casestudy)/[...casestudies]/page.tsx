import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-center text-black pt-32">
      <div className="text-black">
        Hello! This page has not been created yet!
      </div>
      <Link href="/" className="text-blue-500 underline">
        Click here to return home!
      </Link>
    </div>
  );
};

export default page;
