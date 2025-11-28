import { useState } from "react";
import { TrainingCard } from "./TrainingCard";

export const DayAccordion = ({ day, sessions }: {
  day: string;
  sessions: any[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-black text-white hover:bg-[#FFD700] hover:text-black transition"
      >
        <span className="text-lg font-semibold">{day}</span>
        <span className="text-2xl font-bold">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="bg-white">
          {sessions.map((s, idx) => (
            <TrainingCard key={idx} {...s} />
          ))}
        </div>
      )}
    </div>
  );
}; 