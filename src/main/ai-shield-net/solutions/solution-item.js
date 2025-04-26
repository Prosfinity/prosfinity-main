import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const SolutionItem = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="bg-white shadow-xl rounded-lg"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactCardFlip isFlipped={isFlipped}>
        <div className="min-h-[200px] flex flex-col justify-center p-5 gap-2 rounded-lg">
          {icon}
          <p className="text-lg text-gray-600 font-semibold">{title}</p>
        </div>

        <div className="bg-sky-500 text-white min-h-[200px] flex flex-col justify-center p-5 gap-2 rounded-lg">
          {description}
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default SolutionItem;
