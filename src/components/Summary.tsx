
import { Button } from "@/components/ui/button";

interface SummaryProps {
  text: string;
  onEdit?: () => void;
}

const Summary = ({ text, onEdit }: SummaryProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="inline-block w-1 h-5 bg-purple-500 rounded-full"></span>
          Summary
        </h3>
        <Button variant="ghost" size="sm" onClick={onEdit}>
          Edit
        </Button>
      </div>
      
      <div className="border-l-2 border-purple-500 pl-4 py-1 text-gray-700">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Summary;
