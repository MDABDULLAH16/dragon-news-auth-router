import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div className="sticky top-2">
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
