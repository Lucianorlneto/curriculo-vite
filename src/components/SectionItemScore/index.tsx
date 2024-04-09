import React from "react";
import BlackCircle from "../../assets/blackcircle.png";
import GrayCircle from "../../assets/graycircle.jpeg";

interface SectionItemScore {
  content: {
    label: string;
    score?: number;
  }[];
}

const Score: React.FC<{ score: number }> = ({ score }) => {
  const array = [0, 1, 2, 3, 4];
  return array.map((item) => {
    return (
      <div className="flex flex-row items-center">
        <img
          className={`w-4 h-4 rounded-full mr-5`}
          src={item < score ? BlackCircle : GrayCircle}
        />
      </div>
    );
  });
};

const SectionItemScore: React.FC<SectionItemScore> = ({ content }) => {
  return (
    <div className="grid grid-cols-2 ml-64 gap-4 pt-6 mb-4 -mt-12 text-left">
      {content?.map((item) => {
        return (
          <div className="flex flex-row">
            <p className="min-w-24 font-semibold">{item.label}</p>
            {item.score && <Score score={item.score} />}
          </div>
        );
      })}
    </div>
  );
};

export default SectionItemScore;
