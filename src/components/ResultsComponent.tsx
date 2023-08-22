import React from 'react';
import data from '../data/data.json';

type Results = {
  category: string;
  score: number;
  icon: string;
  color: string;
  bg: string;
};

const ResultsComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-stretch drop-shadow-custom grid-cols-2 my-44">
      <div className="bg-gradient-to-b from-indigo-600 to-indigo-500 rounded-3xl flex flex-col flex-auto-0 py-4 px-16">
        <div className="text-center">
          <p className="text-gray-300 font-body font-bold text-xl py-4">Your Result</p>
          <div className="relative w-48 h-48 rounded-full bg-gradient-to-b from-indigo-800 to-indigo-600 mx-auto">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-white font-body font-extrabold text-7xl">76</p>
              <p className="text-gray-400 font-body font-medium">of 100</p>
            </div>
          </div>
          <div>
            <p className="text-white font-body font-bold text-3xl py-4">Great</p>
            <p className="text-gray-300 font-body">You scored higher than 65% of<br></br> the people who have taken<br></br> these tests.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-10 rounded-r-3xl flex flex-col">
        <h1 className="font-body font-extrabold text-left text-xl">Summary</h1>
        {data.map((category: Results, index: number) => (
          <div key={index} className="rounded-xl my-2 py-4 px-4 grid grid-cols-4" style={{ backgroundColor: category.bg }}>
            <div className="flex col-span-3">
              <img src={category.icon} alt={category.category} />
              <h2 className="font-body font-semibold px-2" style={{ color: category.color }}>{category.category}</h2>
            </div>
            <div>
              <p className="text-slate-500 font-body font-medium"><b className="text-black">{category.score}</b> / 100</p>
            </div>
          </div>
        ))}
        <button className="bg-slate-700 hover:bg-gradient-to-t from-indigo-600 to-indigo-500 text-white font-body font-bold py-3 mt-6 rounded-full">
          <p>Continue</p>
        </button>
      </div>
    </div>
  );
};

export default ResultsComponent;