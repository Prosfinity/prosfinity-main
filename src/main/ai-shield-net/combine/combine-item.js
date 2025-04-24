import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const CombineItem = ({ icon, title, description, position }) => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  return (
    <div
      ref={ref}
      className={`${
        loaded || inViewport
          ? `animate__animated ${position === "left" ? "animate__bounceInLeft" : "animate__bounceInRight"} animate__fast`
          : ""
      } border-yellow-500 border-2 rounded-2xl p-5 flex gap-5`}
    >
      <div>
        <div className="bg-yellow-500 rounded-full p-4">{icon}</div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default CombineItem;
