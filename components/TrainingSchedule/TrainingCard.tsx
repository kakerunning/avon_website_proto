import { Tag } from "./Tag";

export const TrainingCard = ({ plaats, tijd, categorie, open, sluiting, opmerkingen }: {
  plaats: string;
  tijd: string;
  categorie: string;
  open?: string;
  sluiting?: string;
  opmerkingen?: string;
}) => (
  <div className="p-4 border-b border-gray-200">
    <div className="flex justify-between text-sm mb-1">
      <span className="font-medium text-gray-800">{plaats}</span>
      <span className="text-gray-500">{tijd}</span>
    </div>
    <div className="flex flex-wrap gap-2 items-center">
      <Tag text={categorie} />
      {open && sluiting && (
        <span className="text-sm text-gray-600">⏰ {open} - {sluiting}</span>
      )}
    </div>
    {opmerkingen && (
      <p className="text-xs text-yellow-600 mt-2">{opmerkingen}</p>
    )}
  </div>
); 