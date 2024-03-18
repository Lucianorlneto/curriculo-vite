import React from "react";

interface SectionItemScore {
  content: {
    label: string;
    score: number;
  }[];
}

const Score: React.FC<{ score: number }> = ({ score }) => {
  const array = [0, 1, 2, 3, 4];
  return array.map((item) => {
    return (
      <div className="flex flex-row items-center">
        <div
          className={`w-4 h-4 rounded-full ${
            item < score ? "bg-black" : "bg-gray-400"
          } mr-2 `}
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
            <p className="min-w-48">{item.label}</p>
            <Score score={item.score} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionItemScore;
